export function addUkraineGeoJSON(map) {
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
}

export function addUkraineBorderGeoJSON(map) {
    fetch('./json/ukraine_border.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#FFD700',
                    weight: 9,
                    opacity: 0.8,
                    dashArray: '5',
                    fillColor: '#3388ff',
                    fillOpacity: 0.3,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine border geoJSON:', error));
}
