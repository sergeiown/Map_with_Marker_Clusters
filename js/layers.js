/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.{ext}', {
    attribution: '© OpenStreetMap contributors',
    opacity: 1,
    minZoom: 5,
    maxZoom: 19,
    ext: 'png',
});

// export const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.{ext}', {
//     attribution: '© OpenTopoMap contributors',
//     opacity: 1,
//     minZoom: 5,
//     maxZoom: 19,
//     ext: 'png',
// });

export const esriWorldStreetMap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri',
        opacity: 1,
        minZoom: 5,
        maxZoom: 19,
    }
);

// export const esriNatGeoWorldMap = L.tileLayer(
//     'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
//     {
//         attribution: 'Tiles &copy; Esri &mdash; National Geographic',
//         opacity: 1,
//         minZoom: 5,
//         maxZoom: 12,
//     }
// );

export const visicomLayer = L.tileLayer('https://tms{s}.visicom.ua/2.0.0/planet3/base_uk/{z}/{x}/{y}.{ext}', {
    attribution: '© «<a href="https://api.visicom.ua/">Visicom</a>»',
    subdomains: '123',
    tms: true,
    opacity: 1,
    minZoom: 5,
    maxZoom: 19,
    ext: 'png',
});

export const googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps',
    opacity: 1,
    minZoom: 5,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});

export const baseLayers = {
    'Open Street Map': osmLayer,
    // 'Open Topo Map': topoLayer,
    'Esri World Street': esriWorldStreetMap,
    // 'Esri NatGeo Map': esriNatGeoWorldMap,
    'Visicom Base': visicomLayer,
    'Google Sat Map': googleSat,
};
