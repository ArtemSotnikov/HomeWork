
// Other functions

// Variables
let currentSlide = 0;

// Query DOM elements
const imgContainerElem = document.querySelector(".slider");
console.log(imgContainerElem);
const firstImageElem = document.querySelector("img");
console.log(firstImageElem);
const leftElement = document.querySelector(".prev");
const rightElement = document.querySelector(".next");
console.log(leftElement);
console.log(rightElement);
const allImages = document.querySelectorAll(".image_container");
console.log(allImages);
const slidesCount = allImages.length;
console.log(slidesCount);

// Events
leftElement.addEventListener("click", onLeftClick);
rightElement.addEventListener("click", onRightClick);

// Listeners
function onLeftClick() {
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = slidesCount - 1;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
}

function onRightClick() {
    currentSlide++;

    if(currentSlide === slidesCount) {
        currentSlide = 0;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
}