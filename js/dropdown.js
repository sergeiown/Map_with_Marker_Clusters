/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { getCompaniesData } from '../js/companiesData.js';

export async function createDropdown(map) {
    const companiesData = (await getCompaniesData()).sort((a, b) => a.company.localeCompare(b.company));

    const dropdown = document.createElement('select');
    dropdown.id = 'company-dropdown';

    const defaultOption = document.createElement('option');
    defaultOption.value = 'default';
    defaultOption.text = 'Виберіть компанію з переліку:';
    dropdown.appendChild(defaultOption);

    companiesData.forEach((company) => {
        const option = document.createElement('option');
        option.value = company.company;
        option.text = company.company;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', (event) => {
        const selectedCompany = event.target.value;

        const selectedCompanyData = companiesData.find((company) => company.company === selectedCompany);

        map.flyTo([selectedCompanyData.lat, selectedCompanyData.lng], 17, {
            duration: 4,
        });
    });

    document.body.appendChild(dropdown);
}
