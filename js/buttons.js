const isMobile =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia('(max-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches);

export function createControlButton(options) {
    return L.Control.extend({
        options: options,
        onAdd: function () {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control custom-button');
            container.title = options.title;

            const image = L.DomUtil.create('img', 'center-image', container);
            image.src = options.imageSrc;

            function updateContainerStyle() {
                let shiftAmount = '25px';

                if (
                    isMobile &&
                    window.matchMedia('(orientation: landscape)').matches &&
                    !options.title.includes('Legend')
                ) {
                    container.style.left = shiftAmount;
                } else if (
                    isMobile &&
                    window.matchMedia('(orientation: landscape)').matches &&
                    options.title.includes('Legend')
                ) {
                    container.style.right = shiftAmount;
                } else {
                    container.style.right = '';
                    container.style.left = '';
                }
            }

            updateContainerStyle();

            window.addEventListener('resize', updateContainerStyle);

            container.addEventListener('click', options.onClick);

            return container;
        },
    });
}
