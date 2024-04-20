export const isMobile =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia('(max-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches);
