export function addUkraineGeoJSON(map) {
    fetch('./json/ukraine.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#3388ff',
                    weight: 4,
                    opacity: 0.2,
                    dashArray: '0',
                    fillOpacity: 0,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine geoJSON:', error));
}

export function addUkraineBorderGeoJSON(map) {
    fetch('./json/ukraine_border.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#FFD700',
                    weight: 9,
                    opacity: 0.7,
                    dashArray: '4',
                    fillOpacity: 0,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine border geoJSON:', error));
}
