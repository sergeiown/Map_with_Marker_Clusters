# "Map with Marker Clusters"

[EN](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README.md)  |  **[UA](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/README-UA.md)**

## Огляд

Цей застосунок створений для візуалізації маркерів на мапі з використанням бібліотеки `Leaflet` та групування їх за допомогою `Leaflet.markercluster`. Застосунок покликаний відобразити розташування компаній на мапі з можливістю групування маркерів у кластери. Доступні різноманіні варіани відображення шарів мапи та додакові опції.

| Структура:  ||
| --- | --- |
| Залежності | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/6e698250-6042-46be-bf0b-99917dcb13ff) |

| Зовнішній вигляд:  ||
| --- | --- |
| ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/4f9fe4f3-4ced-418b-8502-aa8558c9e048) | ![image](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/8b8f3e2e-32ec-4baa-8391-def278b63bd3) |
| Адміністративна мапа                  | Топографічна мапа                      |

| Зовнішній вигляд (мобільна версія):  ||
| --- | --- |
| ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/bd2f8c1c-f035-49f7-84bd-5ccbe3222332) | ![ios-17 4](https://github.com/sergeiown/Map_with_Marker_Clusters/assets/112722061/d2ad3692-e56d-413a-bbec-4a441bee8170) |
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

1. **Мапа**: Координати та параметри карти налаштовуються у `L.map('map').setView([49.0, 31.0], 6);` у файлі `map.js`.
2. **Маркери**: Дані про компанії завантажуються з файлу `companies.json` та використовуються для розміщення маркерів на карті. Маркери зберігаються у папці `markers`.
3. **Кластери**: Кластеризація маркерів реалізована за допомогою `Leaflet.markercluster`.
4. **Легенда**: Дані легенди завантажуються з файлу `legend.json`. Маркери зберігаються у папці `markers`.

## Додаткові Геодані

1. **Області України**: Геодані для областей України завантажуються з файлу `ukraine.geojson`.
2. **Межі України**: Геодані для меж України завантажуються з файлу `ukraine_border.geojson`.

## Завдання для Майбутнього Розвитку

1. **Додавання Інтерактивності**: Розглядаю можливість додавання додаткової інтерактивності для маркерів або додаткових шарів на карті.
2. **Оптимізація Завантаження**: Розглядаю можливості оптимізації завантаження великої кількості маркерів для поліпшення продуктивності.

## Ліцензія

[Copyright (c) 2023-2024 Serhii I. Myshko](https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE)
