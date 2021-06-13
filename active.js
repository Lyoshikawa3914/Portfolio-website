const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

let slidePosition = 0;
const slides = document.getElementsByClassName('card_js');
const totalSlides = slides.length;



// dispalys mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}


menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1288 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};



menuLinks.addEventListener('click', hideMobileMenu);

document.
    getElementById('carousel__button--next')
    .addEventListener("click", function(){
    movetoNextSlide();
});
document.
    getElementById('carousel__button--prev')
    .addEventListener("click", function(){
    movetoPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('card__visible');
        slide.classList.add('carousel__card--hidden');
    }
    slides[slidePosition].classList.add('card__visible')
}

function moveToNextSlide() {
    

    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    

    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}


