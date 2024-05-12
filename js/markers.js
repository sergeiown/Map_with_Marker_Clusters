/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

async function loadCompanyAddresses() {
    try {
        const response = await fetch('./json/companies.json');
        const addresses = await response.json();
        return addresses;
    } catch (error) {
        console.error('Error loading addresses:', error);
        return [];
    }
}

function createMarkers(map, addresses) {
    const markers = L.markerClusterGroup();

    addresses.forEach((address, index) => {
        const customIcon = L.icon({
            iconUrl: `./markers/${address.marker}_marker.png`,
            iconSize: [38, 38],
            iconAnchor: [15, 42],
        });

        const marker = L.marker([address.lat, address.lng], { icon: customIcon });
        const popupContent = `<b>${address.company}</b><br>${address.address}<br><small>${address.info}`;
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

        const delay = (2000 / addresses.length) * index;

        setTimeout(() => {
            markers.addLayer(marker);
            map.addLayer(markers);
        }, delay);
    });
}

export async function addMarkers(map) {
    setTimeout(async () => {
        const addresses = await loadCompanyAddresses();
        createMarkers(map, addresses);
    }, 2000);
}
