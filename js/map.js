/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import * as layers from '../js/layers.js';
import { isMobile } from '../js/mobileDetector.js';
import { createControlButton } from '../js/buttons.js';
import { addLegend } from '../js/legend.js';
import { openPopupWindow } from '../js/popupWindow.js';
import { updateControlStyle, updateLayer, gradualOpacityAnimation } from '../js/mapUtils.js';
import '../js/fullScreen.js';

export function initializeMap() {
    const initialZoom = isMobile ? 5 : 6;

    const map = L.map('map').setView([49.1, 31.2], initialZoom);

    // Create a button to set the default coordinates and zoom
    const centerButton = createControlButton({
        position: 'topleft',
        title: 'Set the default position',
        imageSrc: './markers/default.svg',
        onClick: function () {
            map.flyTo([49.1, 31.2], initialZoom, {
                duration: 3,
            });
        },
    });
    map.addControl(new centerButton());

    // Creat a full screen button
    if (!isMobile) {
        L.control
            .fullScreenButton({
                position: 'topleft',
            })
            .addTo(map);
    }

    // Create a button to call the external map frame
    const frontButton = createControlButton({
        position: 'bottomleft',
        title: 'Front line map',
        imageSrc: './markers/front.svg',
        onClick: function () {
            const frontLineMapUrl = 'https://deepstatemap.live/#6/49.1/31.2';
            openPopupWindow(frontLineMapUrl);
        },
    });
    map.addControl(new frontButton());

    // Create a button to call the legend right after creating a dropdown list
    map.on('dropdownCreated', function () {
        const legendButton = createControlButton({
            position: 'topright',
            title: 'Legend',
            imageSrc: './markers/legend.svg',
            onClick: function () {
                addLegend(map);
            },
        });
        map.addControl(new legendButton());
    });

    // Create a button for selecting map layers
    const layerControl = L.control.layers(layers.baseLayers, null, { position: 'topleft' });
    layerControl.addTo(map);

    // Create a scale control tool
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

    // Create zoom control buttons
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
