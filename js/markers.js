/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { getCompaniesData } from '../js/companiesData.js';

function createMarkers(map, data) {
    const markers = L.markerClusterGroup();

    data.forEach((address, index) => {
        const customIcon = L.icon({
            iconUrl: `./markers/${address.marker}_marker.png`,
            iconSize: [38, 38],
            iconAnchor: [15, 42],
        });

        const marker = L.marker([address.lat, address.lng], { icon: customIcon });
        const popupContent = `
            <b>${address.company}</b><br>
            ${address.address}<br>
            <small>${address.info}</small><br>
            <button class="open-street-view" data-lat="${address.lat}" data-lng="${address.lng}">
                Open Street View
            </button>
        `;
        const popupOptions = {
            closeButton: true,
            closeOnEscapeKey: true,
            closeOnClick: true,
            autoPan: true,
            keepInView: true,
        };

        marker.bindPopup(popupContent, popupOptions);

        let popup;

        marker.on('mouseover', function (e) {
            popup = this.getPopup();
            this.openPopup();
            map.on('mousemove', onMouseMove);
        });

        marker.on('popupclose', function (e) {
            map.off('mousemove', onMouseMove);
        });

        function onMouseMove(e) {
            if (popup && isCursorOutsidePopup(e)) {
                this.closePopup();
            }
        }

        function isCursorOutsidePopup(e) {
            const popupPosition = popup._container.getBoundingClientRect();
            const cursorPosition = { x: e.originalEvent.clientX, y: e.originalEvent.clientY };
            return (
                cursorPosition.x < popupPosition.left ||
                cursorPosition.x > popupPosition.right ||
                cursorPosition.y < popupPosition.top ||
                cursorPosition.y > popupPosition.bottom
            );
        }

        const delay = (2000 / data.length) * index;

        setTimeout(() => {
            markers.addLayer(marker);
            map.addLayer(markers);
        }, delay);
    });

    map.on('popupopen', function (e) {
        const openStreetViewButtons = document.querySelectorAll('.open-street-view');
        openStreetViewButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const lat = this.getAttribute('data-lat');
                const lng = this.getAttribute('data-lng');
                const popupWidth = window.innerWidth * 0.9;
                const popupHeight = window.innerHeight * 0.9;
                const leftPosition = (window.innerWidth - popupWidth) / 2;
                const topPosition = (window.innerHeight - popupHeight) / 2;
                const streetViewUrl = `https://www.google.com/maps?q=&layer=c&cbll=${lat},${lng}`;
                const popupWindow = window.open(
                    streetViewUrl,
                    '_blank',
                    `width=${popupWidth}, height=${popupHeight}, left=${leftPosition}, top=${topPosition}`
                );

                if (popupWindow) {
                    window.addEventListener('beforeunload', function () {
                        popupWindow.close();
                    });
                } else {
                    console.error('Could not open the frame.');
                }
            });
        });
    });
}

export async function addMarkers(map) {
    setTimeout(async () => {
        const data = await getCompaniesData();
        createMarkers(map, data);
    }, 2000);
}
