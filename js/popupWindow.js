/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export function openPopupWindow(url) {
    const popupWidth = window.innerWidth * 0.9;
    const popupHeight = window.innerHeight * 0.9;
    const leftPosition = (window.innerWidth - popupWidth) / 2;
    const topPosition = (window.innerHeight - popupHeight) / 2;
    const popupWindow = window.open(
        url,
        '_blank',
        `width=${popupWidth}, height=${popupHeight}, left=${leftPosition}, top=${topPosition}`
    );

    if (popupWindow) {
        window.addEventListener('beforeunload', function () {
            popupWindow.close();
        });
    } else {
        console.error('Could not open the frame.');
    }
}
