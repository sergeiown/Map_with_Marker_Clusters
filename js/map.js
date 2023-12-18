export function initializeMap() {
    const isMobile =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia('(max-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches);

    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.0, 31.0], initialZoom);

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    });

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    });

    const baseLayers = {
        Звичайний: osmLayer,
        Топографічний: topoLayer,
    };

    const layerControl = L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);
    layerControl.getContainer().style.opacity = 0.6;

    layerControl.getContainer().addEventListener('mouseenter', () => {
        layerControl.getContainer().style.opacity = 0.9;
    });

    layerControl.getContainer().addEventListener('mouseleave', () => {
        layerControl.getContainer().style.opacity = 0.6;
    });

    osmLayer.addTo(map);

    map.zoomControl.setPosition('bottomright');
    map.zoomControl.getContainer().style.opacity = 0.6;

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
