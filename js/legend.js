let legendControl;

export function addLegend(map) {
    if (legendControl) {
        map.removeControl(legendControl);
    }

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
                    innerDiv.innerHTML = `<img src="./markers/${item.marker}_marker.png" style="width: 15px; height: 15px; margin-right: 5px;"> <b>${item.description}</b>`;
                    div.appendChild(innerDiv);
                });

                return div;
            };

            legendControl.addTo(map);

            map.on('click', () => {
                if (legendControl !== null) {
                    map.removeControl(legendControl);
                    legendControl = null;
                }
            });
        })
        .catch((error) => console.error('Error loading legend data:', error));
}
