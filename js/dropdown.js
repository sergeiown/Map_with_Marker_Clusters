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

    dropdown.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    dropdown.style.cursor = 'pointer';
    dropdown.style.borderRadius = '5px';
    dropdown.style.border = '2px solid rgba(0, 0, 0, 0.2)';
    dropdown.style.webkitTextFillColor = 'black';
    dropdown.style.width = '50%';
    dropdown.style.height = '30px';
    dropdown.style.position = 'absolute';
    dropdown.style.top = '10px';
    dropdown.style.left = '50%';
    dropdown.style.transform = 'translateX(-50%)';
    dropdown.style.zIndex = '1000';
    dropdown.style.fontWeight = 'bold';
    dropdown.style.whiteSpace = 'nowrap';
    dropdown.style.textOverflow = 'ellipsis';

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
            duration: 2,
        });
    });

    document.body.appendChild(dropdown);
}
