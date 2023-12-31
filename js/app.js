import { addStyles } from '../js/styles.js';
import { initializeMap, addMarkers } from '../js/map.js';
import { addUkraineGeoJSON, addUkraineBorderGeoJSON } from '../js/geojson.js';
import { createButton } from '../js/button.js';
import { addLegend } from '../js/legend.js';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    addStyles();

    const map = initializeMap();

    addMarkers(map);

    addUkraineGeoJSON(map);

    addUkraineBorderGeoJSON(map);

    createButton();

    addLegend(map);
});
