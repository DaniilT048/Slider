let currentSlide = 0;
const images = [
    "img/slide-1.jpg",
    "img/slide-2.jpg",
    "img/slide-3.jpg",
]

const left = document.querySelector(".left");
const right = document.querySelector(".right");


const contentImg = document.querySelector("#slider .content");
generateImage()
generateDots()
const imgSlide = document.querySelector("#slider img");

const startSlider = document.querySelector("#start-sliding");
const stopSlider = document.querySelector("#stop-sliding");

const slideButtons = document.querySelector("#slider .slider-navigation");

left.addEventListener("click", onLeft);
right.addEventListener("click", onRight);
slideButtons.addEventListener("click", onDotClick)

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
    contentImg.style.transform = `translate(-${currentSlide * imgSlide.offsetWidth}px)`; //Да. Так и вышло. Надо чтоб оно считало каждый раз размер. В таком случае imgWidth вроде даже и не нужен. Он всё ломает
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

let intervalId = null

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


