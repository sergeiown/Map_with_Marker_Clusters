export function addLegend(map) {
    fetch('./json/legend.json')
        .then((response) => response.json())
        .then((legendData) => {
            const legend = L.control({ position: 'topright' });

            legend.onAdd = function () {
                const div = L.DomUtil.create('div', 'legend');
                div.style.border = '1px solid rgba(0, 0, 0, 0.2)';
                div.style.borderRadius = '5px';
                div.style.padding = '5px';
                div.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

                const legendTitle = document.createElement('div');
                legendTitle.style.padding = '5px';
                legendTitle.style.textAlign = 'center';
                div.appendChild(legendTitle);

                const h2 = document.createElement('h2');
                h2.style.marginBottom = '0';
                h2.style.marginTop = '0';
                h2.innerText = 'Легенда:';
                legendTitle.appendChild(h2);

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

            legend.addTo(map);
        })
        .catch((error) => console.error('Error loading legend data:', error));
}
