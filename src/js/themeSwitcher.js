const body = document.querySelector('body');
const iconLink = document.querySelector('.icon__button');
const iconSun = document.querySelector('.icon__sun');
const iconMoon = document.querySelector('.icon__moon');

iconLink.addEventListener('click', toggleClass);

function toggleClass(e) {
    iconMoon.classList.toggle('icon__item--hidden');
    iconSun.classList.toggle('icon__item--hidden');
    body.classList.toggle('dark__theme');
}