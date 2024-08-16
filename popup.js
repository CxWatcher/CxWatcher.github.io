const mapLogo = document.getElementById('mapLogo');
const popupIframe = document.getElementById('popupIframe');

mapLogo.addEventListener('click', () => {
    if (popupIframe.classList.contains('hide')) {
        popupIframe.classList.remove('hide');
        popupIframe.classList.add('show');
    } else {
        popupIframe.classList.remove('show');
        popupIframe.classList.add('hide');
    }
});

document.addEventListener('click', (event) => {
    if (!popupIframe.contains(event.target) && !mapLogo.contains(event.target)) {
        popupIframe.classList.remove('show');
        popupIframe.classList.add('hide');
    }
});
