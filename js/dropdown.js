/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { getCompaniesData } from '../js/companiesData.js';
import { isMobile } from '../js/mobileDetector.js';

export async function createDropdown(map) {
    const companiesData = (await getCompaniesData()).sort((a, b) => a.company.localeCompare(b.company));

    const dropdown = L.control({ position: 'topright' });

    dropdown.onAdd = function () {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        const searchInput = L.DomUtil.create('input', 'company-search-input', container);
        searchInput.type = 'text';
        searchInput.placeholder = '🔎 Пошук...';
        searchInput.maxLength = 27;

        const dataList = L.DomUtil.create('datalist', 'company-datalist', container);
        dataList.id = 'company-list';

        // Update datalist options based on search input
        function updateOptions(filter = '') {
            dataList.innerHTML = '';

            companiesData
                .filter((company) => company.company.toLowerCase().includes(filter.toLowerCase()))
                .forEach((company) => {
                    const option = document.createElement('option');
                    option.value = company.company;
                    dataList.appendChild(option);
                });
        }

        updateOptions();

        searchInput.setAttribute('list', 'company-list');

        searchInput.addEventListener('input', (event) => {
            updateOptions(event.target.value);
        });

        searchInput.addEventListener('change', (event) => {
            const selectedCompany = event.target.value;

            const selectedCompanyData = companiesData.find((company) => company.company === selectedCompany);

            // Clear the input after selection, reset options to the initial state and remove focus from the input field
            if (selectedCompanyData) {
                map.flyTo([selectedCompanyData.lat, selectedCompanyData.lng], 17, {
                    duration: 4,
                });
                searchInput.value = '';
                updateOptions();
                searchInput.blur();
            }
        });

        L.DomEvent.disableClickPropagation(container);
        return container;
    };

    dropdown.addTo(map);

    map.fire('dropdownCreated');

    updateDropdownStyle();

    window.addEventListener('resize', updateDropdownStyle);

    function updateDropdownStyle() {
        if (dropdown !== null) {
            let shiftAmountRight = '25px';

            const dropdownContainer = dropdown.getContainer();

            if (isMobile && window.matchMedia('(orientation: landscape)').matches && dropdown) {
                dropdownContainer.style.right = shiftAmountRight;
                dropdownContainer.style.top = '';
            } else if (isMobile && window.matchMedia('(orientation: portrait)').matches && dropdown) {
                dropdownContainer.style.right = '';
            } else {
                dropdownContainer.style.right = '';
                dropdownContainer.style.left = '';
                dropdownContainer.style.top = '';
                dropdownContainer.style.bottom = '';
            }
        }
    }
}
