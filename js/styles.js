export function addStyles() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        @media (orientation: portrait) {
            body,
            html {
                margin: 0;
                padding: 0;
                height: 100%; /* Set 100% in portrait mode for correct display on iPhone */
                width: 100%;
            }
        }
        
        @media (orientation: landscape) {
            body,
            html {
                margin: 0;
                padding: 0;
                height: 100vh; /* Set 100vh in landscape mode for correct display on iPhone */
                width: 100vw;
            }
        }

        #map {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        
        .leaflet-bar.leaflet-control.custom-button {
            opacity: 0.8;
            width: 50px;
            height: 50px;
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
            opacity: 0.8;
        }

        .leaflet-control-layers-toggle {
            opacity: 0.8 !important;
            width: 50px !important;
            height: 50px !important;
        }
          
        .leaflet-control-layers {
            opacity: 0.8 !important;
            font-weight: bold;
            font-size: 14px;
            line-height: 2;
        }
        
        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
            width: 50px !important;
            opacity: 0.8 !important;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        
        .leaflet-control-zoom {
            opacity: 0.8 !important;
        }
        
        .legend {
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 5px;
            background-color: rgba(255, 255, 255, 0.8);
        }

        @media screen and (orientation: landscape) {
            .legend {
                margin-right: 32px !important;
            }
        }
        
        .legend-title {
            padding: 5px;
            text-align: center;
            opacity: 0.8;
        }
        
        .legend-title h3 {
            margin-bottom: 0;
            margin-top: 0;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            padding: 2px;
            opacity: 0.8;
        }`;

    document.head.appendChild(styleTag);
}
