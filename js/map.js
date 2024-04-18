export function initializeMap() {
    const isMobile =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia('(max-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches);

    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.0, 31.0], initialZoom);

    function createControlButton(options) {
        return L.Control.extend({
            options: options,
            onAdd: function () {
                const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control custom-button');
                container.title = options.title;

                const image = L.DomUtil.create('img', 'center-image', container);
                image.src = options.imageSrc;

                function updateContainerStyle() {
                    if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
                        container.style.left = '22px';
                    } else {
                        container.style.left = '';
                    }
                }

                updateContainerStyle();

                window.addEventListener('resize', updateContainerStyle);

                container.addEventListener('click', options.onClick);

                return container;
            },
        });
    }

    const centerButton = createControlButton({
        position: 'topleft',
        title: 'Set the default position',
        imageSrc: './markers/default.png',
        onClick: function () {
            map.flyTo([49.0, 31.0], initialZoom, {
                duration: 3,
            });
            document.getElementById('company-dropdown').selectedIndex = 0;
        },
    });
    map.addControl(new centerButton());

    const frontButton = createControlButton({
        position: 'bottomleft',
        title: 'Front line map',
        imageSrc: './markers/front.png',
        onClick: function () {
            window.open('https://thepage.ua/ua/karta-liniyi-frontu-v-ukrayini', '_blank');
        },
    });
    map.addControl(new frontButton());

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
        Адміністративна: osmLayer,
        Топографічна: topoLayer,
        'National Geographic': esriNatGeoWorldMap,
    };

    const layerControl = L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);

    function updateLayerControlStyle() {
        if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
            layerControl.getContainer().style.left = '22px';
        } else {
            layerControl.getContainer().style.left = '';
        }
    }

    updateLayerControlStyle();

    window.addEventListener('resize', updateLayerControlStyle);

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
