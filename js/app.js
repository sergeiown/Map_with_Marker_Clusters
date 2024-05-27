/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { addStyles } from '../js/styles.js';
import { initializeMap } from '../js/map.js';
import { addMarkers } from './markers.js';
import { addGeoBoundaries } from '../js/geojson.js';
import { createDropdown } from '../js/dropdown.js';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    addStyles();

    const map = initializeMap();

    createDropdown(map);

    addMarkers(map);

    addGeoBoundaries(map);
});
