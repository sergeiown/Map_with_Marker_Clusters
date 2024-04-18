import { addStyles } from '../js/styles.js';
import { initializeMap } from '../js/map.js';
import { addMarkers } from './markers.js';
import { addUkraineGeoJSON, addUkraineBorderGeoJSON } from '../js/geojson.js';
import { createButton } from '../js/button.js';
import { addLegend } from '../js/legend.js';
import { createDropdown } from '../js/dropdown.js';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    addStyles();

    const map = initializeMap();

    addMarkers(map);

    addUkraineGeoJSON(map);

    addUkraineBorderGeoJSON(map);

    addLegend(map);

    createDropdown(map);

    createButton();
});
