
const images = [
    "img/slide-1.jpg",
    "img/slide-2.jpg",
    "img/slide-3.jpg",
];
let intervalId = null;
let currentSlide = 0;

const left = document.querySelector("#slider .left");
const right = document.querySelector("#slider .right");
const contentImg = document.querySelector("#slider .content");
generateImage()
generateDots()
const imgSlide = document.querySelector("#slider img");
const startSlider = document.querySelector("#slider #start-sliding");
const stopSlider = document.querySelector("#slider #stop-sliding");
const slideNavigation = document.querySelector("#slider .slider-navigation");

left.addEventListener("click", onLeft);
right.addEventListener("click", onRight);

slideNavigation.addEventListener("click", onDotClick)

startSlider.addEventListener('click', startAutoSlides);
stopSlider.addEventListener('click', stopAutoSlides);


function generateImage() {
    let imgHtml = '';
    images.forEach((image) => {
        imgHtml += `<img src=${image} alt="">`;
    })
    contentImg.innerHTML = imgHtml;
}


function onLeft() {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = images.length -1;
    }
    contentImg.style.transform = `translate(-${currentSlide * imgSlide.offsetWidth}px)`;
    activeDot()
}


function onRight() {
    currentSlide++;
    if(currentSlide >= images.length){
        currentSlide = 0;
    }
    contentImg.style.transform = `translate(-${currentSlide * imgSlide.offsetWidth}px)`;
    activeDot()
}


function generateDots() {
    let resultHtml = '';
    images.forEach((image, index) => {
        const activeClass = index === 0 ? "active" : "";
        resultHtml += `<div class="dots ${activeClass}" data-dot="${index}"></div>`
    })
    document.querySelector('#slider .slider-navigation').innerHTML = resultHtml;
}


function onDotClick(event) {
    if (!event.target.classList.contains("dots")) {
        return;
    }
  currentSlide = event.target.dataset.dot;
  contentImg.style.transform = `translate(-${currentSlide * imgSlide.offsetWidth}px)`;
    activeDot()
}


function activeDot() {
    const activeClass = document.querySelector("#slider .active");
    if (activeClass) {
        activeClass.classList.remove("active");
    }
    document.querySelector(`#slider div[data-dot='${currentSlide}']`)
    .classList.add("active");
}


function startAutoSlides () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            onRight();
        }, 2000)
    }
}


function stopAutoSlides () {
    clearInterval(intervalId)
    intervalId = null;
}


window.addEventListener('keydown', (event) => {
    switch (event.key) {
    case 'ArrowRight': onRight(); break;
    case 'ArrowLeft': onLeft();
    }
})


// contentImg.addEventListener('touchstart', startTouch);
// contentImg.addEventListener('touchmove', moveTouch);
// contentImg.addEventListener('touchend', endTouch);
//
// contentImg.addEventListener('mousedown', startTouch);
// contentImg.addEventListener('mousemove', moveTouch);
// contentImg.addEventListener('mouseup', endTouch);
// contentImg.addEventListener('mouseleave', endTouch);
//
// let startX = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let slideWidth = contentImg.clientWidth / images.length;
//
// function startTouch(event) {
//     startX = event.touches ? event.touches[0].clientX : event.clientX;
//     contentImg.style.transition = 'none';
// }
//
// function moveTouch(event) {
//     if (!startX) return;
//     let currentX = event.touches ? event.touches[0].clientX : event.clientX;
//     let diff = currentX - startX;
//     currentTranslate = prevTranslate + diff;
//     contentImg.style.transform = `translateX(${currentTranslate}px)`;
// }
//
// function endTouch() {
//     if (!startX) return;
//     let movedBy = currentTranslate - prevTranslate;
//
//     if (movedBy < -50 && currentSlide < images.length - 1) {
//         currentSlide++;
//     } else if (movedBy > 50 && currentSlide > 0) {
//         currentSlide--;
//     }
//
//     prevTranslate = -currentSlide * slideWidth;
//     contentImg.style.transition = 'transform 0.3s ease-in-out';
//     contentImg.style.transform = `translateX(${prevTranslate}px)`;
//
//     activeDot();
//     startX = 0;
// }