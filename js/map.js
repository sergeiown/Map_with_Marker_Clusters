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
            opacity: 1,
            minZoom: 5,
            maxZoom: 12,
            attribution: 'Tiles &copy; Esri &mdash; National Geographic',
        }
    );

    const baseLayers = {
        'National Geographic': esriNatGeoWorldMap,
        Адміністративна: osmLayer,
        Топографічна: topoLayer,
    };

    const layerControl = L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);
    layerControl.getContainer().style.opacity = 0.7;
    layerControl.getContainer().style.fontWeight = 'bold';
    layerControl.getContainer().style.fontSize = '15px';
    layerControl.getContainer().style.lineHeight = '2';

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

    esriNatGeoWorldMap.addTo(map);

    map.zoomControl.setPosition('bottomright');
    map.zoomControl.getContainer().style.opacity = 0.7;

    return map;
}
