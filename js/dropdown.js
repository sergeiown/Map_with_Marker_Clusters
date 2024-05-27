/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { getCompaniesData } from '../js/companiesData.js';
import { isMobile } from '../js/mobileDetector.js';

export async function createDropdown(map) {
    const companiesData = (await getCompaniesData()).sort((a, b) => a.company.localeCompare(b.company));

    const dropdown = L.control({ position: 'topright' });

    dropdown.onAdd = function () {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        const select = L.DomUtil.create('select', 'company-dropdown', container);

        const defaultOption = document.createElement('option');
        defaultOption.value = 'default';
        defaultOption.text = 'Виберіть компанію з переліку:';
        select.appendChild(defaultOption);

        companiesData.forEach((company) => {
            const option = document.createElement('option');
            option.value = company.company;
            option.text = company.company;
            select.appendChild(option);
        });

        select.addEventListener('change', (event) => {
            const selectedCompany = event.target.value;

            const selectedCompanyData = companiesData.find((company) => company.company === selectedCompany);

            map.flyTo([selectedCompanyData.lat, selectedCompanyData.lng], 17, {
                duration: 4,
            });
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
