/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

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
    
    #company-dropdown {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgba(255, 255, 255, 0.8);
        outline: none;
        color: rgb(40, 40, 40);
        -webkit-text-fill-color: rgb(40, 40, 40);
        width: 40%;
        height: 35px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        font-weight: bold;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .leaflet-bar.leaflet-control.custom-button {
        width: 50px;
        height: 50px;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0.8 !important;
    }
    
    .center-image {
        width: 75%;
    }
    
    .leaflet-control-layers-toggle {
        width: 50px !important;
        height: 50px !important;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        opacity: 0.8 !important;
    }
    
    .leaflet-control-layers {
        font-weight: bold;
        font-size: 14px;
        line-height: 2;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        border-radius: 5px;
        border: none !important;
        opacity: 0.8 !important;
    }
    
    .leaflet-control-scale {
        height: 50px !important;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        cursor: pointer;
        border: none !important;
    }
    
    .leaflet-control-scale-line {
        color: rgb(40, 40, 40);
        border: 2px solid rgb(150, 150, 150);
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        font-weight: bolder;
        height: 20px !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .leaflet-bottom .leaflet-control-scale {
        margin-bottom: 12px;
    }
    
    .leaflet-left .leaflet-control-scale {
        margin-left: 12px;
    }
    
    .leaflet-control-zoom-in,
    .leaflet-control-zoom-out {
        width: 35px !important;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .leaflet-control-zoom {
        border: 2px solid rgb(150, 150, 150) !important;
        background-color: rgb(255, 255, 255) !important;
        border-radius: 5px;
        opacity: 0.8 !important;
    }
    
    .legend {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        padding: 10px;
        color: rgb(40, 40, 40);
    }
    
    .legend-title {
        text-align: center;
    }
    
    .legend-title h3 {
        margin-bottom: 5px;
        margin-top: 5px;
    }
    
    .legend-item {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 2;
    }

    .custom-icon,
    .leaflet-marker-icon.marker-cluster.marker-cluster-small {
        filter: drop-shadow(4px 12px 6px rgba(0,0,0,0.5));
    }
    `;

    document.head.appendChild(styleTag);
}
