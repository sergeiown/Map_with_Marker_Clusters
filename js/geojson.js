/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

/* An open database of political administrative boundaries is used:
Produced and maintained since 2017, the geoBoundaries Global Database of
Political Administrative Boundaries Database https://www.geoboundaries.org
is an open license, standardized resource of boundaries for every country
in the world. */

export function addGeoBoundaries(map) {
    const urls = [
        './json/geoBoundariesGeneral.geojson',
        './json/geoBoundariesSimplified.geojson',
        './json/geoBoundariesDetailed.geojson',
    ];

    Promise.allSettled(urls.map((url) => fetch(url).then((response) => response.json())))
        .then((results) => {
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    const data = result.value;
                    switch (index) {
                        case 0:
                            L.geoJSON(data, {
                                style: {
                                    color: '#FFD700',
                                    weight: 9,
                                    opacity: 0.8,
                                    dashArray: '4',
                                    fillOpacity: 0,
                                },
                            }).addTo(map);
                            break;
                        case 1:
                            L.geoJSON(data, {
                                style: {
                                    color: '#3388ff',
                                    weight: 4,
                                    opacity: 0.2,
                                    dashArray: '0',
                                    fillOpacity: 0,
                                },
                            }).addTo(map);
                            break;
                        case 2:
                            L.geoJSON(data, {
                                style: {
                                    color: '#2d7ae6',
                                    weight: 2,
                                    opacity: 0.2,
                                    dashArray: '0',
                                    fillOpacity: 0,
                                },
                            }).addTo(map);
                            break;
                    }
                } else {
                    console.error(`Error loading geoJSON from ${urls[index]}:`, result.reason);
                }
            });
        })
        .catch((error) => console.error('Unexpected loading geoJSON error:', error));
}
