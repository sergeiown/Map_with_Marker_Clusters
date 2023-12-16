export function addStyles() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }

        #map {
            height: 100%;
            overflow: hidden;
        }`;

    document.head.appendChild(styleTag);
}
