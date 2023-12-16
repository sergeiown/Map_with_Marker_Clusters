import { addStyles } from '../js/styles.js';
import { initializeMap, addMarkers } from '../js/map.js';
import { addUkraineGeoJSON, addUkraineBorderGeoJSON } from '../js/geojson.js';
import { createButton } from '../js/button.js';
import { addLegend } from '../js/legend.js';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Додавання стилів
    addStyles();

    // Ініціалізація мапи
    const map = initializeMap();

    // Додавання маркерів
    addMarkers(map);

    // Додавання географічного об'єкту України
    addUkraineGeoJSON(map);

    // Додавання географічного об'єкту границь України
    addUkraineBorderGeoJSON(map);

    // Створення кнопки
    createButton();

    // Додавання легенди
    addLegend(map);
});
