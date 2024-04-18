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

            function updateContainerStyle() {
                if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
                    container.style.left = '22px';
                } else {
                    container.style.left = '';
                }
            }

            updateContainerStyle();

            window.addEventListener('resize', updateContainerStyle);

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

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors',
        opacity: 1,
        minZoom: 5,
        maxZoom: 17,
    });

    const esriNatGeoWorldMap = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        {
            attribution: 'Tiles &copy; Esri &mdash; National Geographic',
            opacity: 1,
            minZoom: 5,
            maxZoom: 12,
        }
    );

    const baseLayers = {
        'National Geographic': esriNatGeoWorldMap,
        Адміністративна: osmLayer,
        Топографічна: topoLayer,
    };

    const layerControl = L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);

    function updatelayerControlStyle() {
        if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
            layerControl.getContainer().style.left = '22px';
        } else {
            layerControl.getContainer().style.left = '';
        }
    }

    updatelayerControlStyle();

    window.addEventListener('resize', updatelayerControlStyle);

    layerControl.getContainer().addEventListener('mouseenter', () => {
        layerControl.getContainer().style.opacity = 1;
    });

    layerControl.getContainer().addEventListener('mouseleave', () => {
        layerControl.getContainer().style.opacity = 0.7;
    });

    osmLayer.addTo(map);

    map.zoomControl.setPosition('bottomright');
    map.zoomControl.getContainer().style.opacity = 0.7;

    return map;
}
