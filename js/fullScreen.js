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
            document.addEventListener('fullscreenchange', () => {
                updateFullScreenButton(!!document.fullscreenElement);
            });
        } else if (element.mozRequestFullScreen) {
            handleFullScreenRequest(element.mozRequestFullScreen()); // Firefox
            document.addEventListener('mozfullscreenchange', () => {
                updateFullScreenButton(!!document.mozFullScreenElement);
            });
        } else if (element.webkitRequestFullscreen) {
            handleFullScreenRequest(element.webkitRequestFullscreen()); // Chrome, Safari, Opera
            document.addEventListener('webkitfullscreenchange', () => {
                updateFullScreenButton(!!document.webkitFullscreenElement);
            });
        } else if (element.msRequestFullscreen) {
            handleFullScreenRequest(element.msRequestFullscreen()); // IE/Edge
            document.addEventListener('MSFullscreenChange', () => {
                updateFullScreenButton(!!document.msFullscreenElement);
            });
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    } else {
        if (document.exitFullscreen) {
            handleFullScreenExit(document.exitFullscreen());
            document.removeEventListener('fullscreenchange', () => {
                updateFullScreenButton(!!document.fullscreenElement);
            });
        } else if (document.mozCancelFullScreen) {
            handleFullScreenExit(document.mozCancelFullScreen());
            document.removeEventListener('mozfullscreenchange', () => {
                updateFullScreenButton(!!document.mozFullScreenElement);
            });
        } else if (document.webkitExitFullscreen) {
            handleFullScreenExit(document.webkitExitFullscreen());
            document.removeEventListener('webkitfullscreenchange', () => {
                updateFullScreenButton(!!document.webkitFullscreenElement);
            });
        } else if (document.msExitFullscreen) {
            handleFullScreenExit(document.msExitFullscreen());
            document.removeEventListener('MSFullscreenChange', () => {
                updateFullScreenButton(!!document.msFullscreenElement);
            });
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    }
}

function updateFullScreenButton(isFullScreen) {
    const fullScreenButton = document.querySelector('.full-screen-button');
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
