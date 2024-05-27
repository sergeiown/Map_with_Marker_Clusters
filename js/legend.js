/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

import { isMobile } from '../js/mobileDetector.js';

let legendControl;

export function addLegend(map) {
    if (legendControl) {
        map.removeControl(legendControl);
    }

    document.querySelectorAll('.leaflet-bar.leaflet-control.custom-button[title*="Legend"]').forEach((button) => {
        button.style.display = 'none';
    });

    fetch('./json/legend.json')
        .then((response) => response.json())
        .then((legendData) => {
            legendControl = L.control({ position: 'topright' });

            legendControl.onAdd = function () {
                const div = L.DomUtil.create('div', 'legend');

                const legendTitle = document.createElement('div');
                legendTitle.classList.add('legend-title');
                div.appendChild(legendTitle);

                const h3 = document.createElement('h3');
                h3.innerText = 'Легенда:';
                legendTitle.appendChild(h3);

                legendData.forEach((item) => {
                    const innerDiv = document.createElement('div');
                    innerDiv.classList.add('legend-item');
                    innerDiv.innerHTML = `<img src="./markers/${item.marker}_marker.png" style="width: 20px; height: 20px; margin-right: 10px;"> <b>${item.description}</b>`;
                    div.appendChild(innerDiv);
                });

                return div;
            };

            legendControl.addTo(map);

            map.on('click', () => {
                if (legendControl !== null) {
                    map.removeControl(legendControl);
                    legendControl = null;

                    document
                        .querySelectorAll('.leaflet-bar.leaflet-control.custom-button[title*="Legend"]')
                        .forEach((button) => {
                            button.style.display = 'flex';
                        });
                }
            });
            function updateLegendStyle() {
                if (legendControl !== null) {
                    let shiftAmountRight = '25px';

                    const legendContainer = legendControl.getContainer();

                    if (isMobile && window.matchMedia('(orientation: landscape)').matches && legendControl) {
                        legendContainer.style.right = shiftAmountRight;
                        legendContainer.style.top = '';
                    } else if (isMobile && window.matchMedia('(orientation: portrait)').matches && legendControl) {
                        legendContainer.style.right = '';
                    } else {
                        legendContainer.style.right = '';
                        legendContainer.style.left = '';
                        legendContainer.style.top = '';
                        legendContainer.style.bottom = '';
                    }
                }
            }

            updateLegendStyle();

            window.addEventListener('resize', updateLegendStyle);
        })
        .catch((error) => console.error('Error loading legend data:', error));
}
