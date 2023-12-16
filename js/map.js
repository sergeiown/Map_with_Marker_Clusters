export function initializeMap() {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.0, 31.0], initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    }).addTo(map);

    return map;
}

export function addMarkers(map) {
    const markers = L.markerClusterGroup();

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

            map.addLayer(markers);
        })
        .catch((error) => console.error('Error loading addresses:', error));
}
