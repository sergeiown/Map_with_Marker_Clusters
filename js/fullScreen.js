/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export function toggleFullScreen(element) {
    function handleFullScreenRequest(promise) {
        promise
            .then(() => {
                updateFullScreenButton(true);
            })
            .catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
    }

    function handleFullScreenExit(promise) {
        promise
            .then(() => {
                updateFullScreenButton(false);
            })
            .catch((err) => {
                console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
            });
    }

    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            handleFullScreenRequest(element.requestFullscreen());
        } else if (element.mozRequestFullScreen) {
            handleFullScreenRequest(element.mozRequestFullScreen()); // Firefox
        } else if (element.webkitRequestFullscreen) {
            handleFullScreenRequest(element.webkitRequestFullscreen()); // Chrome, Safari, Opera
        } else if (element.msRequestFullscreen) {
            handleFullScreenRequest(element.msRequestFullscreen()); // IE/Edge
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    } else {
        if (document.exitFullscreen) {
            handleFullScreenExit(document.exitFullscreen());
        } else if (document.mozCancelFullScreen) {
            handleFullScreenExit(document.mozCancelFullScreen());
        } else if (document.webkitExitFullscreen) {
            handleFullScreenExit(document.webkitExitFullscreen());
        } else if (document.msExitFullscreen) {
            handleFullScreenExit(document.msExitFullscreen());
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    }
}

function updateFullScreenButton(isFullScreen) {
    const fullScreenButton = document.querySelector('.leaflet-control-container .full-screen-button');
    if (fullScreenButton) {
        if (isFullScreen) {
            fullScreenButton.title = 'Exit full screen mode';
            fullScreenButton.querySelector('img').src = './markers/general_screen.png';
        } else {
            fullScreenButton.title = 'Set full screen mode';
            fullScreenButton.querySelector('img').src = './markers/full_screen.png';
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    updateFullScreenButton(!!document.fullscreenElement);
});
document.addEventListener('webkitfullscreenchange', () => {
    updateFullScreenButton(!!document.webkitFullscreenElement);
});
document.addEventListener('mozfullscreenchange', () => {
    updateFullScreenButton(!!document.mozFullScreenElement);
});
document.addEventListener('MSFullscreenChange', () => {
    updateFullScreenButton(!!document.msFullscreenElement);
});
