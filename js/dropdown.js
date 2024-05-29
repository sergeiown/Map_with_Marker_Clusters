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
        searchInput.maxLength = 30;

        const customDropdown = L.DomUtil.create('div', 'custom-dropdown', container);
        customDropdown.id = 'company-list';

        // Update custom dropdown options based on search input
        function updateOptions(filter = '') {
            customDropdown.innerHTML = '';

            companiesData
                .filter((company) => company.company.toLowerCase().includes(filter.toLowerCase()))
                .forEach((company) => {
                    const option = document.createElement('div');
                    option.className = 'custom-dropdown-item';
                    option.textContent = company.company;
                    customDropdown.appendChild(option);

                    option.addEventListener('click', () => {
                        selectCompany(company);
                    });
                });
        }

        function selectCompany(company) {
            map.flyTo([company.lat, company.lng], 17, { duration: 4 });
            searchInput.value = '';
            updateOptions();
            searchInput.blur();
        }

        updateOptions();

        searchInput.addEventListener('input', (event) => {
            updateOptions(event.target.value);
            customDropdown.style.display = 'block';
        });

        searchInput.addEventListener('focus', () => {
            customDropdown.style.display = 'block';
        });

        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                customDropdown.style.display = 'none';
            }, 100);
        });

        // Disable map scroll zoom when mouse is over the dropdown
        customDropdown.addEventListener('mouseenter', () => {
            map.scrollWheelZoom.disable();
        });

        customDropdown.addEventListener('mouseleave', () => {
            map.scrollWheelZoom.enable();
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
