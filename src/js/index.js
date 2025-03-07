const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const main = document.getElementById('main');
const secondary = document.getElementById('secondary');

function show(show) {

    if(show) {
        secondary.style.display = 'flex';
        menuClose.style.display = 'flex';
        main.style.display = 'none';
        menuOpen.style.display = 'none';

        return

    } else {
        secondary.style.display = 'none';
        menuClose.style.display = 'none'
        main.style.display = 'flex';
        menuOpen.style.display = 'flex';
    }
}

menuOpen.addEventListener('click', () => show(true));
menuClose.addEventListener('click', () => show(false));
