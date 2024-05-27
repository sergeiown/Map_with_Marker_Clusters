# "Map with Marker Clusters"

**[EN](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README.md)**  |  [UA](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README-UA.md)

## Overview

The application is designed to display the location of companies in a user-friendly way on a map with the ability to group the created markers into clusters. Various options for displaying map layers and additional options are available.

| Structure:  ||
| --- | --- |
| Dependencies | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/d056e412-4625-43dc-83f2-e4e8c017b6e3) |

| Appearance:  ||
| --- | --- | 
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/4f9fe4f3-4ced-418b-8502-aa8558c9e048) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/8b8f3e2e-32ec-4baa-8391-def278b63bd3) |
| Administrative layer                  | Topographic layer                      |

| Appearance (mobile version):  ||
| --- | --- |
| ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/bd2f8c1c-f035-49f7-84bd-5ccbe3222332) | ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/d2ad3692-e56d-413a-bbec-4a441bee8170) |
| Portrait | Landscape |

## Technical resources and libraries

The following additional libraries are used:
1. **Leaflet**: JavaScript library for interactive maps
   - [Leaflet Documentation](https://leafletjs.com/)
2. **Leaflet.markercluster**: An extension to Leaflet that allows markers to be grouped into clusters to improve map display efficiency.
   - [Leaflet.markercluster Documentation](https://github.com/Leaflet/Leaflet.markercluster)
3. **geoBoundaries Global Database**: Political Administrative Boundaries Database an open license, standardized resource of boundaries for every country in the world.
   - [geoBoundaries Global Database](https://www.geoboundaries.org)

The libraries are integrated into the project and no additional installation is required.

## Installation and startup

1. Download the project from the repository.
2. Open the HTML file in your web browser or use a local server to run it.

## Configuration and Data

1. **Map**: The map coordinates and parameters are configured in `L.map('map').setView([49.0, 31.0], 6);` in the `map.js` file.
2. **Markers**: Company data is loaded from the `companies.json` file and used to place markers on the map. Markers are stored in the `markers` folder.
3. **Clusters**: The clustering of markers is implemented using `Leaflet.markercluster`.
4. **Legend**: Legend data is loaded from the `legend.json` file. Markers are stored in the `markers` folder.

## Additional Geodata

1. **State borders of Ukraine**: Geodata for the borders of Ukraine are loaded from the `geoBoundariesGeneral.geojson` file.
2. **Regional borders**: The geodata for Ukrainian regions are loaded from the `geoBoundariesSimplified.geojson` file.
3. **District borders**: The geodata for for districts of Ukraine are loaded from the `geoBoundariesDetailed.geojson` file.

## Tasks for Future Development

1. **Adding Interactivity**: I am considering adding additional interactivity for markers or additional layers on the map.

## License

[Copyright (c) 2023-2024 Serhii I. Myshko](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE)
