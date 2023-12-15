/* Copyright (c) 2023 Serhii I. Myshko https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const map = L.map('map').setView([49.0, 31.0], 6); // Центр та зум мапи

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

    // Отримання елемента контейнера для кнопки
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '10px';
    buttonContainer.style.left = '10px';
    buttonContainer.style.zIndex = '1000';
    document.body.appendChild(buttonContainer);

    // Створення кнопки
    const openPageButton = document.createElement('button');
    openPageButton.style.cursor = 'pointer';
    openPageButton.addEventListener('click', () => {
        window.open('https://thepage.ua/ua/karta-liniyi-frontu-v-ukrayini', '_blank');
    });

    openPageButton.innerHTML =
        '<span style="font-weight: bold; font-size: larger;">Ознайомитися з поточною ситуацією</span><br><span style="font-weight: bold; font-size: larger;">по тимчасово окупованих територіях</span>';

    buttonContainer.appendChild(openPageButton);
});
