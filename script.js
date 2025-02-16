let currentSlide = 0
let imageWidth;
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");

const slider = document.getElementById("slider");
const firstSlide = document.querySelector("#slider img");
imageWidth = firstSlide.offsetWidth;
console.log(imageWidth);
const contentImg = document.querySelector("#content");

left.addEventListener("click", leftButtonClick);
// right.addEventListener("click", );

function leftButtonClick() {
 currentSlide--;
    contentImg.style.element.transform = `translate(${currentSlide * imageWidth}px)`;

}