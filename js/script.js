/* JS for Webp images */
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

/* Main JS */

let body = document.querySelector('body');
let countDate = new Date('2021/07/09, 9:00').getTime();

setInterval(function countDown() {

    if (body.classList.contains('countdown-active')) {

        let nowDate = new Date().getTime();
        let timeLeft = (countDate - nowDate);

        let seconds = 1000;
        let minutes = (seconds * 60);
        let hours = (minutes * 60);
        let days = (hours * 24);

        let countDays = Math.floor(timeLeft / days);
        let countHours = Math.floor((timeLeft % days) / hours);
        let countMinutes = Math.floor((timeLeft % hours) / minutes);
        let countSeconds = Math.floor((timeLeft % minutes) / seconds);

        document.getElementById('days').innerText = countDays;
        document.getElementById('hours').innerText = countHours;
        document.getElementById('minutes').innerText = countMinutes;
        document.getElementById('seconds').innerText = countSeconds;

        if (timeLeft <= 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
        }
    }

}, 1000)

// Header Background JS

let header = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let navbar = document.getElementById('navbar');

window.addEventListener("scroll", checkScroll);

function checkScroll() {
    let scrollPosition = Math.floor(window.scrollY);

    if (scrollPosition >= 100) {
        header.classList.add('header-black');
    } else if (scrollPosition < 100 && !navbar.classList.contains('active')) {
        header.classList.remove('header-black');
    }
}

// Burger Menu For Mobile

let burgerBtn = document.getElementById('burger-btn');
let subnav = document.querySelector(".subnav-mobile");
let subnavBtn = document.querySelector(".subnav-btn");

burgerBtn.addEventListener('click', function () {
    let scrollPosition = Math.floor(window.scrollY);

    burgerBtn.classList.toggle('active');
    navbar.classList.toggle('active');

    subnav.classList.remove('active');
    subnavBtn.classList.remove('active');

    if (scrollPosition < 100) {
        header.classList.toggle('header-black')
    }
});


// GoToUp Button 

let gotoupBtn = document.getElementById('gotoup-btn');

window.addEventListener("scroll", checkScrollBtn);

function checkScrollBtn() {
    let scrollPosition = Math.floor(window.scrollY);

    if (scrollPosition >= 100) {
        gotoupBtn.classList.add('active');
    } else {
        gotoupBtn.classList.remove('active');
    }

}


// Subnav For Mobile 

subnavBtn.addEventListener('click', function () {
    subnav.classList.toggle('active');

    if (subnav.classList.contains('active')) {
        subnavBtn.classList.add('active');
    } else {
        subnavBtn.classList.remove('active');
    }
});

body.addEventListener('click', () => {
    subnav.classList.remove('active');
    subnavBtn.classList.remove('active');

    subnav.addEventListener('click', event => {
        event.stopPropagation();
    });

    subnavBtn.addEventListener('click', event => {
        event.stopPropagation();
    });
});

// Body not scrolling

function checkNavActivity() {
    if (navbar.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

setInterval(checkNavActivity, 100);


// Contact click JS 

let contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    burgerBtn.classList.remove('active');
});