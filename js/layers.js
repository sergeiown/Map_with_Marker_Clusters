/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.{ext}', {
    attribution: '© OpenStreetMap contributors',
    opacity: 1,
    minZoom: 5,
    maxZoom: 17,
    ext: 'png',
});

export const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.{ext}', {
    attribution: '© OpenTopoMap contributors',
    opacity: 1,
    minZoom: 5,
    maxZoom: 17,
    ext: 'png',
});

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
    Адміністративна: osmLayer,
    Топографічна: topoLayer,
    'National Geographic': esriNatGeoWorldMap,
};
