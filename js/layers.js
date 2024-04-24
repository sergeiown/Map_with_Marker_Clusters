/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.{ext}', {
    attribution: '© OpenStreetMap contributors',
    opacity: 1,
    minZoom: 5,
    maxZoom: 17,
    ext: 'png',
});

export const stadiaAlidadeSmooth = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}',
    {
        attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
        ext: 'png',
    }
);

export const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.{ext}', {
    attribution: '© OpenTopoMap contributors',
    opacity: 1,
    minZoom: 5,
    maxZoom: 17,
    ext: 'png',
});

export const stadiaStamenTerrain = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}',
    {
        attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
        ext: 'png',
    }
);

export const stadiaAlidadeSatellite = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}',
    {
        attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 19,
        ext: 'jpg',
    }
);

export const esriNatGeoWorldMap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri &mdash; National Geographic',
        opacity: 1,
        minZoom: 5,
        maxZoom: 12,
    }
);

export const baseLayers = {
    'Адміністративна 1': osmLayer,
    'Адміністративна 2': stadiaAlidadeSmooth,
    'Топографічна 1': topoLayer,
    'Топографічна 2': stadiaStamenTerrain,
    'Супутникова мапа': stadiaAlidadeSatellite,
    'National Geographic': esriNatGeoWorldMap,
};
