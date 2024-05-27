/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export function toggleFullScreen(element) {
    function handleFullScreenRequest(promise) {
        promise
            .then(() => {
                console.log('Entered full-screen mode.');
            })
            .catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
    }

    function handleFullScreenExit(promise) {
        promise
            .then(() => {
                console.log('Exited full-screen mode.');
            })
            .catch((err) => {
                console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
            });
    }

    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            handleFullScreenRequest(element.requestFullscreen());
        } else if (element.mozRequestFullScreen) {
            // Firefox
            handleFullScreenRequest(element.mozRequestFullScreen());
        } else if (element.webkitRequestFullscreen) {
            // Chrome, Safari, and Opera
            handleFullScreenRequest(element.webkitRequestFullscreen());
        } else if (element.msRequestFullscreen) {
            // IE/Edge
            handleFullScreenRequest(element.msRequestFullscreen());
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    } else {
        if (document.exitFullscreen) {
            handleFullScreenExit(document.exitFullscreen());
        } else if (document.mozCancelFullScreen) {
            // Firefox
            handleFullScreenExit(document.mozCancelFullScreen());
        } else if (document.webkitExitFullscreen) {
            // Chrome, Safari, and Opera
            handleFullScreenExit(document.webkitExitFullscreen());
        } else if (document.msExitFullscreen) {
            // IE/Edge
            handleFullScreenExit(document.msExitFullscreen());
        } else {
            console.error('Fullscreen API is not supported by this browser.');
        }
    }
}
