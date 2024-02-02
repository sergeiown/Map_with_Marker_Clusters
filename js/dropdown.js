// Функція для отримання даних про компанії
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

// Функція для створення випадаючого переліку
export async function createDropdown(map) {
    // Отримуємо дані про компанії та сортуємо за алфавітом
    const companiesData = (await getCompaniesData()).sort((a, b) => a.company.localeCompare(b.company));

    // Створюємо випадаючий перелік (select)
    const dropdown = document.createElement('select');
    dropdown.id = 'company-dropdown';

    // Додаємо стилі до випадаючого переліку
    dropdown.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    dropdown.style.cursor = 'pointer';
    dropdown.style.borderRadius = '5px';
    dropdown.style.border = '2px solid rgba(0, 0, 0, 0.2)';
    dropdown.style.webkitTextFillColor = 'black'; // Додано новий стиль
    dropdown.style.width = '50%'; // Ширина 50% ширини вікна
    dropdown.style.height = '30px'; // Висота переліку
    dropdown.style.position = 'absolute';
    dropdown.style.top = '10px';
    dropdown.style.left = '50%';
    dropdown.style.transform = 'translateX(-50%)';
    dropdown.style.zIndex = '1000';
    dropdown.style.fontWeight = 'bold';

    // Додаємо пункт за замовченням
    const defaultOption = document.createElement('option');
    defaultOption.value = 'default';
    defaultOption.text = 'Виберіть компанію з переліку:';
    dropdown.appendChild(defaultOption);

    // Додаємо опції до випадаючого переліку
    companiesData.forEach((company) => {
        const option = document.createElement('option');
        option.value = company.company;
        option.text = company.company;
        dropdown.appendChild(option);
    });

    // Обробник події для кліку на опцію
    dropdown.addEventListener('change', (event) => {
        const selectedCompany = event.target.value;

        // Знаходимо координати обраної компанії
        const selectedCompanyData = companiesData.find((company) => company.company === selectedCompany);

        // Зумуємо та центруємо мапу на обраній компанії
        map.setView([selectedCompanyData.lat, selectedCompanyData.lng], 13);
    });

    // Додаємо випадаючий перелік на сторінку
    document.body.appendChild(dropdown);
}
