export function createButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '10px';
    buttonContainer.style.left = '10px';
    buttonContainer.style.zIndex = '1000';
    document.body.appendChild(buttonContainer);

    const openPageButton = document.createElement('button');
    openPageButton.style.cursor = 'pointer';
    openPageButton.style.border = '1px solid rgba(0, 0, 0, 0.2)';
    openPageButton.style.borderRadius = '5px';
    openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    openPageButton.style.fontWeight = 'bold';
    openPageButton.style.fontSize = 'large';
    openPageButton.style.color = 'black';
    openPageButton.style.webkitTextFillColor = 'black';
    openPageButton.addEventListener('mousedown', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    });

    openPageButton.addEventListener('mouseup', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    });

    openPageButton.addEventListener('click', () => {
        window.open('https://thepage.ua/ua/karta-liniyi-frontu-v-ukrayini', '_blank');
    });

    openPageButton.innerHTML = 'Ознайомитися з поточною ситуацією<br>по тимчасово окупованих територіях';

    buttonContainer.appendChild(openPageButton);
}
