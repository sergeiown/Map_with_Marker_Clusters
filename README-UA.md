# "Map with Marker Clusters"

[EN](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README.md)  |  **[UA](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README-UA.md)**

## Огляд

Застосунок призначений для відображення розташування компаній зрозумілим користувачу способом на мапі з можливістю групування створених маркерів у кластери. Доступні різні варіанти відображення шарів карти та додаткові опції.

| Структура:  ||
| --- | --- |
| Залежності | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/21b703d0-292b-4167-aa4f-2667bd27d3bc) |

| Зовнішній вигляд:  ||
| --- | --- | 
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/abc83fb7-60c7-4206-82ed-f07e37d22328) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/a58dd4a9-6bb3-49f1-b53a-e0cbb946f198) |

| Зовнішній вигляд (мобільна версія):  ||
| --- | --- |
| ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/bd2f8c1c-f035-49f7-84bd-5ccbe3222332) | ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/d2ad3692-e56d-413a-bbec-4a441bee8170) |
| Портретний | Альбомний |

## Технічні засоби та бібліотеки

Використано наступні додаткові бібліотеки:
1. **Leaflet**: JavaScript-бібліотека для інтерактивних карт.
   - [Leaflet Documentation](https://leafletjs.com/)
2. **Leaflet.markercluster**: Розширення для Leaflet, яке надає можливість групування маркерів у кластери для покращення ефективності відображення на мапі.
   - [Leaflet.markercluster Documentation](https://github.com/Leaflet/Leaflet.markercluster)
3. **geoBoundaries Global Database**: База даних політичних адміністративних кордонів з відкритою ліцензією, стандартизований ресурс кордонів для кожної країни у світі.
   - [geoBoundaries Global Database](https://www.geoboundaries.org)

Бібліотеки інтегровано у проєкт додаткового встановлення не потрібно.

## Встановлення та запуск

1. Завантажте проєкт з репозиторію.
2. Відкрийте HTML-файл у вашому веб-браузері або використовуйте локальний сервер для запуску.

## Конфігурація та Дані

1. **Мапа**: Координати та параметри мапи налаштовуються у `L.map('map').setView([49.0, 31.0], 6);` у файлі `map.js`.
2. **Маркери**: Дані про компанії завантажуються з файлу `companies.json` та використовуються для розміщення маркерів на мапі. Маркери зберігаються у папці `markers`.
3. **Кластери**: Кластеризація маркерів реалізована за допомогою `Leaflet.markercluster`.
4. **Легенда**: Дані легенди завантажуються з файлу `legend.json`. Маркери зберігаються у папці `markers`.

## Додаткові Геодані

1. **Державні кордони України**: Геодані для кордонів України завантажуються з файлу `geoBoundariesGeneral.geojson`.
2. **Обласні кордони**: Геодані для областей України завантажуються з файлу `geoBoundariesSimplified.geojson`.
3. **Межі районів**: Геодані для районів України завантажуються з файлу `geoBoundariesDetailed.geojson`.

## Завдання для Майбутнього Розвитку

1. **Додавання Інтерактивності**: Розглядаю можливість додавання додаткової інтерактивності для маркерів або додаткових шарів на мапі.

## Ліцензія

[Copyright (c) 2023-2024 Serhii I. Myshko](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE)
