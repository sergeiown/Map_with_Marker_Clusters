# "Map with Marker Clusters"

[EN](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README.md)  |  **[UA](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README-UA.md)**

## Огляд

Цей застосунок створений для візуалізації маркерів на мапі з використанням бібліотеки `Leaflet` та групування їх за допомогою `Leaflet.markercluster`. Застосунок покликаний відобразити розташування компаній на карті з можливістю групування маркерів у кластери.

| Структура:  ||
| --- | --- |
| Залежності | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/e4283e95-2d3e-4fef-8259-eeb4c57a688e) |

| Зовнішній вигляд:  |||
| --- | --- | --- |
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/7fa9ef7c-a2d3-4cd4-90b2-dfe4738caf77) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/608e1645-474b-4924-8db6-72fbc7034d18) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/7aec0145-110a-4189-8e8f-47bfcbb015cf) |
| Адміністративна мапа                  | Топографічна мапа                      | National Geographic |

| Зовнішній вигляд (мобільна версія):  ||
| --- | --- |
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/f9916191-fd1d-4c1e-a234-8875793212f2) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/b091f384-7feb-43b9-b4df-e87c7718291d) |
| Портретний | Альбомний |

## Технічні засоби та бібліотеки

1. **Leaflet**: JavaScript-бібліотека для інтерактивних карт.
   - Версія: 1.7.1
   - [Leaflet Documentation](https://leafletjs.com/)

2. **Leaflet.markercluster**: Розширення для Leaflet, яке надає можливість групування маркерів у кластери для покращення ефективності відображення на мапі.
   - [Leaflet.markercluster Documentation](https://github.com/Leaflet/Leaflet.markercluster)

## Встановлення та запуск

1. Завантажте проєкт з репозиторію.
2. Впевніться, що у вас встановлені необхідні бібліотеки та ресурси (Leaflet, Leaflet.markercluster).
3. Відкрийте HTML-файл у вашому веб-браузері або використовуйте локальний сервер для запуску.

## Конфігурація та Дані

1. **Карта**: Координати та параметри карти налаштовуються у `L.map('map').setView([49.0, 31.0], 6);` у файлі `map.js`.
2. **Маркери**: Дані про компанії завантажуються з файлу `companies.json` та використовуються для розміщення маркерів на карті. Маркери зберігаються у папці `markers`.
3. **Кластери**: Кластеризація маркерів реалізована за допомогою `Leaflet.markercluster`.
4. **Легенда**: Дані легенди завантажуються з файлу `legend.json`. Маркери зберігаються у папці `markers`.

## Додаткові Геодані

1. **Області України**: Геодані для областей України завантажуються з файлу `ukraine.geojson`.
2. **Границі України**: Геодані для границь України завантажуються з файлу `ukraine_border.geojson`.

## Завдання для Майбутнього Розвитку

1. **Додавання Інтерактивності**: Розглядаю можливість додавання додаткової інтерактивності для маркерів або додаткових шарів на карті.
2. **Оптимізація Завантаження**: Розглядаю можливості оптимізації завантаження великої кількості маркерів для поліпшення продуктивності.

## Ліцензія

[Copyright (c) 2023 Serhii I. Myshko](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE)
