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
                div.style.border = '2px solid rgba(0, 0, 0, 0.2)';
                div.style.borderRadius = '5px';
                div.style.padding = '5px';
                div.style.marginTop = '10px';
                div.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

                const legendTitle = document.createElement('div');
                legendTitle.style.padding = '5px';
                legendTitle.style.textAlign = 'center';
                div.appendChild(legendTitle);

                const h3 = document.createElement('h3');
                h3.style.marginBottom = '0';
                h3.style.marginTop = '0';
                h3.innerText = 'Легенда:';
                legendTitle.appendChild(h3);

                legendData.forEach((item) => {
                    const innerDiv = document.createElement('div');
                    innerDiv.style.display = 'flex';
                    innerDiv.style.alignItems = 'center';
                    innerDiv.style.padding = '2px';
                    innerDiv.innerHTML = `<img src="./markers/${item.marker}_marker.png" style="width: 15px; height: 15px; margin-right: 5px;"> <b>${item.description}</b>`;
                    div.appendChild(innerDiv);
                });

                return div;
            };

            legendControl.addTo(map);

            map.on('click', () => {
                map.removeControl(legendControl);
                legendControl = null;
            });

            document.addEventListener('click', (event) => {
                const target = event.target;
                const legendContainer = legendControl.getContainer();
                if (!legendContainer.contains(target)) {
                    map.removeControl(legendControl);
                    legendControl = null;
                }
            });
        })
        .catch((error) => console.error('Error loading legend data:', error));
}
