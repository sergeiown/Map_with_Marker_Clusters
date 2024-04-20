# "Map with Marker Clusters"

**[EN](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README.md)**  |  [UA](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README-UA.md)

## Overview

This application is designed to visualize markers on a map using the `Leaflet` library and group them using`Leaflet.markercluster`. The application is designed to display the location of companies on the map with the ability to group markers into clusters.

| Structure:  ||
| --- | --- |
| Dependencies | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/b3f30326-1a09-456e-9329-3f6caa481845) |

| Appearance:  |||
| --- | --- | --- |
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/7fa9ef7c-a2d3-4cd4-90b2-dfe4738caf77) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/608e1645-474b-4924-8db6-72fbc7034d18) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/7aec0145-110a-4189-8e8f-47bfcbb015cf) |
| Administrative layer                  | Topographic layer                      | National Geographic |

| Appearance (mobile version):  ||
| --- | --- |
| ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/bd2f8c1c-f035-49f7-84bd-5ccbe3222332) | ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/d2ad3692-e56d-413a-bbec-4a441bee8170) |
| Portrait | Landscape |

## Technical resources and libraries

1. **Leaflet**: JavaScript library for interactive maps - Version: 1.7.1 - [Leaflet Documentation](https://leafletjs.com/)

2. **Leaflet.markercluster**: An extension to Leaflet that allows markers to be grouped into clusters to improve map display efficiency. - [Leaflet.markercluster Documentation](https://github.com/Leaflet/Leaflet.markercluster)

## Installation and startup

1. Download the project from the repository.
2. Make sure you have the necessary libraries and resources installed (Leaflet, Leaflet.markercluster).
3. Open the HTML file in your web browser or use a local server to run it.

## Configuration and Data

1. **Map**: The map coordinates and parameters are configured in `L.map('map').setView([49.0, 31.0], 6);` in the `map.js` file.
2. **Markers**: Company data is loaded from the `companies.json` file and used to place markers on the map. Markers are stored in the `markers` folder.
3. **Clusters**: The clustering of markers is implemented using `Leaflet.markercluster`.
4. **Legend**: Legend data is loaded from the `legend.json` file. Markers are stored in the `markers` folder.

## Additional Geodata

1. **Regions of Ukraine**: The geodata for the regions of Ukraine are loaded from the file `ukraine.geojson`.
2. **Borders of Ukraine**: Geodata for the borders of Ukraine are loaded from the file `ukraine_border.geojson`.

## Tasks for Future Development

1. **Adding Interactivity**: I am considering adding additional interactivity for markers or additional layers on the map.
2. **Optimizing Loading**: I am considering optimizing the loading of a large number of markers to improve performance.

## License

[Copyright (c) 2023 Serhii I. Myshko](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE)
