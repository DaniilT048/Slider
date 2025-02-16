let currentSlide = 0;
let imageWidth;

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const firstSlide = document.querySelector("#slider img");
imageWidth = firstSlide.offsetWidth;
const contentImg = document.querySelector(".content");

const startSlider = document.querySelector("#start-sliding");
const stopSlider = document.querySelector("#stop-sliding");

left.addEventListener("click", onLeft);
right.addEventListener("click", onRight);

startSlider.addEventListener('click', startAutoSlides);
stopSlider.addEventListener('click', stopAutoSlides);

function onLeft() {
 currentSlide--;
    contentImg.style.transform = `translate(-${currentSlide * firstSlide.offsetWidth}px)`; //Да. Так и вышло. Надо чтоб оно считало каждый раз размер. В таком случае imgWidth вроде даже и не нужен. Он всё ломает

}

function onRight() {
    currentSlide++;
    contentImg.style.transform = `translate(-${currentSlide * firstSlide.offsetWidth}px)`;
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

