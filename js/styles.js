export function addStyles() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vw;
        }

        #map {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        
        .leaflet-bar.leaflet-control.custom-button {
            opacity: 0.8;
            width: 44px;
            height: 44px;
            background-color: rgba(255, 255, 255, 0.7);
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
          
        .center-image {
            width: 75%;
            opacity: 0.75;
        }
          
        .leaflet-control-layers {
            opacity: 0.7;
            font-weight: bold;
            font-size: 15px;
            line-height: 2;
        }`;

    document.head.appendChild(styleTag);
}
