/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import * as layers from '../js/layers.js';
import { isMobile } from '../js/mobileDetector.js';
import { createControlButton } from '../js/buttons.js';
import { addLegend } from '../js/legend.js';
import { toggleFullScreen } from '../js/fullScreen.js';
import { updateControlStyle, updateLayer, gradualOpacityAnimation } from '../js/mapUtils.js';

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

    if (!isMobile) {
        const fullScreenButton = createControlButton({
            position: 'topleft',
            title: 'Set full screen mode',
            imageSrc: './markers/full_screen.png',
            extraClass: 'full-screen-button',
            onClick: function () {
                const mapContainer = document.getElementById('map');
                toggleFullScreen(mapContainer);
            },
        });
        map.addControl(new fullScreenButton());
    }

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

    const layerControl = L.control.layers(layers.baseLayers, null, { position: 'topleft' });
    layerControl.addTo(map);

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

    updateLayer(map);

    map.getPane('mapPane').style.opacity = 0;
    gradualOpacityAnimation(map);

    updateControlStyle(map);
    window.addEventListener('resize', () => updateControlStyle(map));

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    return map;
}
