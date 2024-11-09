const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    let src = (hamburger.src.includes('hamburger')) ? 'img/icon-close.svg' : 'img/icon-hamburger.svg';
    hamburger.src = src;

    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});