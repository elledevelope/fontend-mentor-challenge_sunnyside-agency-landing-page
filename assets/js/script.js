
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
});

