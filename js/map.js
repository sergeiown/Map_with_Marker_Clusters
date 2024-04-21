import * as layers from '../js/layers.js';
import { isMobile } from '../js/mobileDetector.js';
import { createControlButton } from '../js/buttons.js';
import { addLegend } from '../js/legend.js';

export function initializeMap() {
    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.1, 31.2], initialZoom);

    const centerButton = createControlButton({
        position: 'topleft',
        title: 'Set the default position',
        imageSrc: './markers/default.png',
        onClick: function () {
            map.flyTo([49.1, 31.2], initialZoom, {
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
            const popupWidth = window.innerWidth * 0.9;
            const popupHeight = window.innerHeight * 0.9;
            const leftPosition = (window.innerWidth - popupWidth) / 2;
            const topPosition = (window.innerHeight - popupHeight) / 2;
            const popupWindow = window.open(
                'https://deepstatemap.live/#6/49.1/31.2',
                '_blank',
                `width=${popupWidth}, height=${popupHeight}, left=${leftPosition}, top=${topPosition}`
            );

            if (popupWindow) {
                window.addEventListener('beforeunload', function () {
                    popupWindow.close();
                });
            } else {
                console.error('Could not open the frame.');
            }
        },
    });
    map.addControl(new frontButton());

    const legendButton = createControlButton({
        position: 'topright',
        title: 'Legend',
        imageSrc: './markers/legend.png',
        onClick: function () {
            addLegend(map);
        },
    });
    map.addControl(new legendButton());

    const layerControl = L.control.layers(layers.baseLayers, null, { position: 'topleft' }).addTo(map);

    const scaleControl = L.control
        .scale({
            Width: 50,
            metric: true,
            imperial: false,
            updateWhenIdle: false,
            position: 'bottomleft',
        })
        .addTo(map);

    scaleControl.getContainer().setAttribute('title', 'Map scale');

    map.zoomControl.setPosition('bottomright');

    function updateControlStyle() {
        let shiftAmount = '25px';
        let shiftAmountAttribution = '35px';

        if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
            layerControl.getContainer().style.left = shiftAmount;
            scaleControl.getContainer().style.left = shiftAmount;
            map.zoomControl.getContainer().style.right = shiftAmount;
            document.querySelector('.leaflet-control-attribution').style.right = shiftAmountAttribution;
        } else {
            layerControl.getContainer().style.left = '';
            scaleControl.getContainer().style.left = '';
            map.zoomControl.getContainer().style.right = '';
            document.querySelector('.leaflet-control-attribution').style.right = '';
        }
    }

    updateControlStyle();

    window.addEventListener('resize', updateControlStyle);

    layers.osmLayer.addTo(map);

    map.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    return map;
}
