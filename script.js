let currentSlide = 0;
const images = [
    "img/slide-1.jpg",
    "img/slide-2.jpg",
    "img/slide-3.jpg",
]

const left = document.querySelector(".left");
const right = document.querySelector(".right");


const contentImg = document.querySelector(".content");
generateImage()
const imgSlide = document.querySelector("#slider img");

const startSlider = document.querySelector("#start-sliding");
const stopSlider = document.querySelector("#stop-sliding");

const dots = document.querySelector(".dots");

left.addEventListener("click", onLeft);
right.addEventListener("click", onRight);

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

}

function onRight() {
    currentSlide++;
    if(currentSlide >= images.length){
        currentSlide = 0;
    }
    contentImg.style.transform = `translate(-${currentSlide * imgSlide.offsetWidth}px)`;
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

function dotsNavigation (){

}

