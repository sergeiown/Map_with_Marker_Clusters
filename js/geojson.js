/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

/* An open database of political administrative boundaries is used:
Produced and maintained since 2017, the geoBoundaries Global Database of
Political Administrative Boundaries Database https://www.geoboundaries.org
is an open license, standardized resource of boundaries for every country
in the world. */

export function addGeoBoundariesGeneral(map) {
    fetch('./json/geoBoundariesGeneral.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#FFD700',
                    weight: 9,
                    opacity: 0.8,
                    dashArray: '4',
                    fillOpacity: 0,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine general border geoJSON:', error));
}

export function addGeoBoundariesSimplified(map) {
    fetch('./json/geoBoundariesSimplified.geojson')
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
        .catch((error) => console.error('Error loading Ukraine simplified geoJSON:', error));
}

export function addGeoBoundariesDetailed(map) {
    fetch('./json/geoBoundariesDetailed.geojson')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                style: {
                    color: '#2d7ae6',
                    weight: 2,
                    opacity: 0.2,
                    dashArray: '0',
                    fillOpacity: 0,
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error loading Ukraine detailed geoJSON:', error));
}
