# "Map with Marker Clusters"

## Огляд

Цей застосунок створений для візуалізації маркерів на мапі з використанням бібліотеки Leaflet та групування їх за допомогою Leaflet.markercluster. Застосунок покликаний відобразити розташування компаній на карті з можливістю групування маркерів у кластери.

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

1. **Карта**: Координати та параметри карти налаштовуються у `L.map('map').setView([49.0, 31.0], 6);` у файлі `script.js`.
2. **Маркери**: Дані про компанії завантажуються з файлу `companies.json` та використовуються для розміщення маркерів на карті. Маркери зображені у папці `markers`.
3. **Кластери**: Кластеризація маркерів реалізована за допомогою Leaflet.markercluster.

## Додаткові Геодані

1. **Області України**: Геодані для областей України завантажуються з файлу `ukraine.geojson`.
2. **Границі України**: Геодані для границь України завантажуються з файлу `ukraine_border.geojson`.

## Завдання для Майбутнього Розвитку

1. **Додавання Інтерактивності**: Розглядаю можливість додавання додаткової інтерактивності для маркерів або додаткових шарів на карті.
2. **Оптимізація Завантаження**: Розглядаю можливості оптимізації завантаження великої кількості маркерів для поліпшення продуктивності.

## Ліцензія

[Тут вказати вашу ліцензію, якщо є]
