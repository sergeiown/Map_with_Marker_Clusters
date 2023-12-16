/* Copyright (c) 2023 Serhii I. Myshko https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Додавання тегу стилів до head
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    #map {
        height: 100%;
        overflow: hidden;
    }`;

    document.head.appendChild(styleTag);

    // Центровка та зум мапи
    const map = L.map('map').setView([49.0, 31.0], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        opacity: 1,
    }).addTo(map);

    const markers = L.markerClusterGroup();

    // Завантаження маркерів з зовнішнього JSON-файлу
    fetch('./json/companies.json')
        .then((response) => response.json())
        .then((addresses) => {
            addresses.forEach((address) => {
                const customIcon = L.icon({
                    iconUrl: `./markers/${address.marker}_marker.png`,
                    iconSize: [38, 38],
                    iconAnchor: [15, 42],
                });

                const marker = L.marker([address.lat, address.lng], { icon: customIcon });
                marker.bindPopup(`<b>${address.company}</b><br>${address.address}<br><small>${address.info}`);
                markers.addLayer(marker);
            });

            // Кластери
            map.addLayer(markers);
        })
        .catch((error) => console.error('Error loading addresses:', error));

    // Завантаження об'єкту областей України
    fetch('./json/ukraine.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#001f3f',
                    weight: 2,
                    opacity: 0.1,
                    dashArray: '1',
                    fillOpacity: 0,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine geoJSON:', error));

    // Завантаження географічного об'єкту границь України
    fetch('./json/ukraine_border.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#FFD700',
                    weight: 8,
                    opacity: 1,
                    dashArray: '5',
                    fillColor: '#3388ff',
                    fillOpacity: 0.3,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine border geoJSON:', error));

    // Створення кнопки
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

    // Додавання легенди
    fetch('./json/legend.json')
        .then((response) => response.json())
        .then((legendData) => {
            const legend = L.control({ position: 'topright' });

            legend.onAdd = function () {
                const div = L.DomUtil.create('div', 'legend');
                div.style.border = '1px solid rgba(0, 0, 0, 0.2)';
                div.style.borderRadius = '5px';
                div.style.padding = '5px';
                div.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

                const legendTitle = document.createElement('div');
                legendTitle.style.padding = '5px';
                legendTitle.style.textAlign = 'center';
                div.appendChild(legendTitle);

                const h2 = document.createElement('h2');
                h2.style.marginBottom = '0';
                h2.style.marginTop = '0';
                h2.innerText = 'Легенда:';
                legendTitle.appendChild(h2);

                legendData.forEach((item) => {
                    const innerDiv = document.createElement('div');
                    innerDiv.style.display = 'flex';
                    innerDiv.style.alignItems = 'center';
                    innerDiv.style.padding = '2px';
                    innerDiv.innerHTML = `<img src="./markers/${item.marker}_marker.png" style="width: 15px; height: 15px; margin-right: 5px;"> <b>${item.description}</b>`;
                    div.appendChild(innerDiv);
                });

                return div;
            };

            legend.addTo(map);
        })
        .catch((error) => console.error('Error loading legend data:', error));
});
