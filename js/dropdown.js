async function getCompaniesData() {
    try {
        const response = await fetch('./json/companies.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading companies data:', error);
        return [];
    }
}

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

        map.flyTo([selectedCompanyData.lat, selectedCompanyData.lng], 12, {
            duration: 4,
        });
    });

    document.body.appendChild(dropdown);
}
