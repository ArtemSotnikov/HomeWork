import {Slider} from "./Slider.js";

const slider = new Slider({ });

// Variables
//let currentSlide = 0;
let startX;
let isOngoing = false;
const slideTime = 2; //in seconds
let animation;

// Query DOM elements
//const imgContainerElem = document.querySelector(".slider");
//console.log(imgContainerElem);
//const firstImageElem = document.querySelector("img");
//console.log(firstImageElem);
//Prev and next bars
//const leftElement = document.querySelector(".prev");
//const rightElement = document.querySelector(".next");
//console.log(leftElement);
//console.log(rightElement);
//const allImages = document.querySelectorAll(".image_container");
//console.log(allImages);
const allBullets = document.querySelectorAll(".bullet");
console.log(allBullets);
const startStopElem = document.querySelector(".start_stop");
console.log(startStopElem);

//const slidesCount = allImages.length;
//console.log(slidesCount);

// Events
//On left and right arrows
document.addEventListener("keydown", onKeyPress);
//Support mobile swipe
imgContainerElem.addEventListener("touchstart", onTouchStart);
imgContainerElem.addEventListener("touchend", onTouchEnd);
//Support touchpad
imgContainerElem.addEventListener("wheel", onWheelMove);
//Navigation button
allBullets.forEach(bullet => bullet.addEventListener("click", onBulletClick));
startStopElem.addEventListener("click", onStartStop);


// Listeners

//Check left or right key press then activate functionality of respective bars
function onKeyPress(event) {
   // console.log(event);

    if (event.key === "ArrowLeft") {
        onLeftClick();
    } else if (event.key === "ArrowRight") {
        onRightClick();
    }
}

//"Log" start position on mobile touch.
function onTouchStart(event) {
    //console.log(event);
    startX = event.touches[0].clientX;
    //console.log(startX);
}

//Swipe on mobile
function onTouchEnd(event) {
    //console.log(event);
    let endX = event.changedTouches[0].clientX;
    //console.log(endX);

    if (startX > endX) {
        onRightClick();
    } else if (startX < endX) {
        onLeftClick();
    }
}

//Move on touchpad
function onWheelMove(event) {
    //console.log(event);

    //Introduce some threshold, otherwise uncontrollable behaviour (too "sensitive"/fast)
    const thresholdMoveWheel = 20; //px

    if (event.deltaX > thresholdMoveWheel) {
        //console.log(event.deltaX);
        onRightClick();
    } else if (event.deltaX < -thresholdMoveWheel) {
        onLeftClick();
    }
}

//Scroll slides with navigation bullets
function  onBulletClick(event) {
    //   console.log(event);

    const index = Array.from(allBullets).indexOf(event.target);
    if (index !== -1) {
        //Update index of current slide
        currentSlide = index;
        imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
    }
    updateActiveBullet();
}

//Change active (by color) bullet when slide is scrolled by any method
function updateActiveBullet() {
    //console.log("I am here")

    allBullets.forEach(bullet => { bullet.style.color = "darkblue";});
    allBullets.item(currentSlide).style.color = "red";
}

//Start stop automatic scrolling of slides
function onStartStop(event) {
    if (!isOngoing) {
        //console.log("Start animation");
        isOngoing = true;

        animation = setInterval(onRightClick, slideTime * 1000);
        //console.log(animation);
    } else {
        //console.log("Stop animation");
        isOngoing = false;

        clearInterval(animation);
    }
}