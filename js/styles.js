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
    
    .leaflet-bar.leaflet-control {
        border: none;
    }
    
    .company-search-input {
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 5px;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgb(245, 245, 245);
        color: rgb(40, 40, 40);
        height: 25px;
        width: 250px;
        font-weight: bold;
        font-size: 14px;
        padding-left: 10px;
    }
    
    .company-search-input::placeholder {
        color: rgb(40, 40, 40);
    }
    
    .custom-dropdown {
        position: absolute;
        top: 40px;
        left: 0;
        width: 200px;
        max-height: 260px;
        overflow-y: auto;
        border: none;
        border-radius: 5px;
        background-color: rgb(245, 245, 245);
        z-index: 1000;
        display: none;
    }

    .custom-dropdown::-webkit-scrollbar {
        width: 10px;
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
      }
      
    .custom-dropdown::-webkit-scrollbar-thumb {
        background-color: rgb(150, 150, 150);
        border-radius: 5px;
      }
      
    .custom-dropdown::-webkit-scrollbar-button {
        display: none;
      }
    
    .custom-dropdown-item {
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        padding: 10px;
        cursor: pointer;
    }
    
    .custom-dropdown-item:hover {
        background-color: rgb(255, 255, 255);
    }
    
    .leaflet-bar.leaflet-control.custom-button {
        width: 50px;
        height: 50px;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    .center-image {
        width: 75%;
    }
    
    .leaflet-control-layers-toggle {
        width: 50px !important;
        height: 50px !important;
        border: 2px solid rgb(150, 150, 150);
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
    }
    
    .leaflet-control-layers {
        font-weight: bold;
        font-size: 14px;
        line-height: 2;
        background-color: rgb(245, 245, 245);
        color: rgb(40, 40, 40);
        border-radius: 5px;
        border: none !important;
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
        background-color: rgb(245, 245, 245);
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
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: rgb(245, 245, 245) !important;
    }
    
    .leaflet-control-zoom {
        border: 2px solid rgb(150, 150, 150) !important;
        border-radius: 5px;
    }
    
    .legend {
        cursor: pointer;
        background-color: rgb(245, 245, 245);
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
    
    .leaflet-marker-icon {
        filter: drop-shadow(4px 12px 6px rgba(0, 0, 0, 0.5));
    }
    
    .leaflet-popup-content-wrapper,
    .leaflet-popup-tip {
        background-color: rgb(245, 245, 245);
    }
    
    `;
    document.head.appendChild(styleTag);
}
