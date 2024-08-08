let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var elementPosition = document.querySelector(".sub-sections").offsetTop;
    var windowHeight = window.innerHeight;

    if (scrollPosition > elementPosition - windowHeight + 200) {
        document.querySelector(".sub-sections").classList.add("visible");
    }
});


let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex === 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex--;
    }
    showSlides();
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); 
}

autoSlide(); 


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const newTransform = `translateX(-${currentSlide * 100}%)`;
    slides.style.transform = newTransform;
}

// Initialize first slide
moveSlide(0);
