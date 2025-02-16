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

    contentImg.style.transform = `translate(-${currentSlide * imageWidth}px)`;

}

function onRight() {
    currentSlide++;
    contentImg.style.transform = `translate(-${currentSlide * imageWidth}px)`;
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

