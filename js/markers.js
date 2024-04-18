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

                marker.on('mouseover', function (e) {
                    this.openPopup();
                });

                markers.addLayer(marker);
            });

            map.addLayer(markers);
        })
        .catch((error) => console.error('Error loading addresses:', error));
}
