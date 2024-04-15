export function initializeMap() {
    const isMobile =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia('(max-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches);

    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.0, 31.0], initialZoom);

    const centerButton = L.Control.extend({
        options: {
            position: 'topleft',
        },
        onAdd: function () {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control custom-button');

            const image = L.DomUtil.create('img', 'center-image', container);
            image.src = './markers/default.png';

            container.style.opacity = 0.8;
            container.style.width = '44px';
            container.style.height = '44px';
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            container.style.border = '2px solid rgba(0, 0, 0, 0.2)';
            container.style.borderRadius = '5px';
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.cursor = 'pointer';

            image.style.width = '75%';
            image.style.opacity = '0.75';

            container.addEventListener('click', function () {
                map.setView([49.0, 31.0], initialZoom);
                document.getElementById('company-dropdown').selectedIndex = 0;
            });

            return container;
        },
    });
    map.addControl(new centerButton());

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    });

    const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
        attribution:
            '&copy; <a href="https://carto.com/">Carto</a> | Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
    });

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    });

    const TopPlusOpen_Color = L.tileLayer(
        'http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png',
        {
            opacity: 1,
            minZoom: 5,
            maxZoom: 16,
            attribution: 'Map data: &copy; <a href="http://www.govdata.de/dl-de/by-2-0">dl-de/by-2-0</a>',
        }
    );

    const Stadia_AlidadeSatellite = L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}',
        {
            opacity: 1,
            minZoom: 5,
            maxZoom: 17,
            attribution:
                '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            ext: 'jpg',
        }
    );

    const Esri_NatGeoWorldMap = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        {
            opacity: 1,
            minZoom: 5,
            maxZoom: 12,
            attribution:
                'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        }
    );

    const baseLayers = {
        'Адміністративна мапа базова': osmLayer,
        'Адміністративна мапа альтернативна': cartoLayer,
        'Топографічна мапа базова': topoLayer,
        'Топографічна мапа альтернативна': TopPlusOpen_Color,
        'Супутникова мапа': Stadia_AlidadeSatellite,
        'National Geographic': Esri_NatGeoWorldMap,
    };

    const layerControl = L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);
    layerControl.getContainer().style.opacity = 0.8;
    layerControl.getContainer().style.fontWeight = 'bold';
    layerControl.getContainer().style.fontSize = '15px';
    layerControl.getContainer().style.lineHeight = '2';

    layerControl.getContainer().addEventListener('mouseenter', () => {
        layerControl.getContainer().style.opacity = 1;
    });

    layerControl.getContainer().addEventListener('mouseleave', () => {
        layerControl.getContainer().style.opacity = 0.8;
    });

    osmLayer.addTo(map);

    map.zoomControl.setPosition('bottomright');
    map.zoomControl.getContainer().style.opacity = 0.7;

    return map;
}
