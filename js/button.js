export function createButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px';
    buttonContainer.style.left = '10px';
    buttonContainer.style.zIndex = '1000';
    document.body.appendChild(buttonContainer);

    const openPageButton = document.createElement('button');
    openPageButton.classList.add('leaflet-bar', 'leaflet-control', 'custom-button');
    openPageButton.style.padding = '0';
    openPageButton.style.width = '62px';
    openPageButton.style.height = '62px';

    openPageButton.setAttribute('title', 'Front line map');

    const image = document.createElement('img');
    image.src = './markers/front.png';
    image.classList.add('center-image');
    openPageButton.appendChild(image);

    openPageButton.addEventListener('click', () => {
        window.open('https://thepage.ua/ua/karta-liniyi-frontu-v-ukrayini', '_blank');
    });

    buttonContainer.appendChild(openPageButton);
}
