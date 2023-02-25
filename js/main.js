//Действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

//делаем расчеты

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//Устанавливаем год на странице 
year.innerText = currentYear + 1;

function updateCounter(){
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    //Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Часов всего, остаток от деления на 24
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    //Минут всего, остаток от преобразования в часы, минут всего
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    //Секунд всего, Отсаток от преобразования в минуты, секунд всего
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);

setTimeout(function(){
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);