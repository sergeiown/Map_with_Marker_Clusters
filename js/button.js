export function createButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px';
    buttonContainer.style.left = '10px';
    buttonContainer.style.zIndex = '1000';
    document.body.appendChild(buttonContainer);

    const openPageButton = document.createElement('button');
    openPageButton.style.cursor = 'pointer';
    openPageButton.style.border = '2px solid rgba(0, 0, 0, 0.2)';
    openPageButton.style.borderRadius = '5px';
    openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    openPageButton.style.fontWeight = 'bold';
    openPageButton.style.fontSize = '15px';
    openPageButton.style.lineHeight = '1.2';
    openPageButton.style.color = 'black';
    openPageButton.style.webkitTextFillColor = 'black';

    openPageButton.addEventListener('mouseenter', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        openPageButton.style.position = 'relative';
        openPageButton.style.zIndex = '1';

        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
        overlay.style.borderRadius = '5px';
        overlay.style.zIndex = '-1';
        openPageButton.appendChild(overlay);
    });

    openPageButton.addEventListener('mouseleave', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        openPageButton.style.position = 'static';
        openPageButton.style.zIndex = 'auto';

        const overlay = openPageButton.querySelector('div');
        if (overlay) {
            openPageButton.removeChild(overlay);
        }
    });

    openPageButton.addEventListener('mousedown', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    });

    openPageButton.addEventListener('mouseup', () => {
        openPageButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    });

    openPageButton.addEventListener('click', () => {
        window.open('https://thepage.ua/ua/karta-liniyi-frontu-v-ukrayini', '_blank');
    });

    openPageButton.innerHTML = 'Ознайомитися з поточною ситуацією<br>по тимчасово окупованих територіях';

    buttonContainer.appendChild(openPageButton);
}
