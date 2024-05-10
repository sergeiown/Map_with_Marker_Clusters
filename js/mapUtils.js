/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { isMobile } from './mobileDetector.js';
import * as layers from './layers.js';

export function updateControlStyle(map) {
    let shiftAmount = '25px';
    let shiftAmountAttribution = '35px';

    if (isMobile && window.matchMedia('(orientation: landscape)').matches) {
        map.getContainer().querySelector('.leaflet-control-layers').style.left = shiftAmount;
        map.getContainer().querySelector('.leaflet-control-scale').style.left = shiftAmount;
        map.zoomControl.getContainer().style.right = shiftAmount;
        document.querySelector('.leaflet-control-attribution').style.right = shiftAmountAttribution;
    } else {
        map.getContainer().querySelector('.leaflet-control-layers').style.left = '';
        map.getContainer().querySelector('.leaflet-control-scale').style.left = '';
        map.zoomControl.getContainer().style.right = '';
        document.querySelector('.leaflet-control-attribution').style.right = '';
    }
}

export function updateLayer(map) {
    const selectedLayer = localStorage.getItem('selectedLayer');

    if (selectedLayer && layers.baseLayers[selectedLayer]) {
        layers.baseLayers[selectedLayer].addTo(map);
    } else {
        layers.osmLayer.addTo(map);
    }

    map.on('baselayerchange', function (event) {
        localStorage.setItem('selectedLayer', event.name);
    });

    map.on('moveend', function () {
        if (map.hasLayer(layers.baseLayers['Google Sat Map'])) {
            console.clear();
        }
    });
}

export function gradualOpacityAnimation(map) {
    const targetOpacity = 1;
    const opacityStep = 0.05;
    const currentOpacity = parseFloat(map.getPane('mapPane').style.opacity);

    if (currentOpacity < targetOpacity) {
        const newOpacity = Math.min(currentOpacity + opacityStep, targetOpacity);
        map.getPane('mapPane').style.opacity = newOpacity;
        setTimeout(() => gradualOpacityAnimation(map), 100);
    }
}
