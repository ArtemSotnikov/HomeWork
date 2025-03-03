// Variables
let currentSlide = 0;
let startX;

// Query DOM elements
const imgContainerElem = document.querySelector(".slider");
console.log(imgContainerElem);
const firstImageElem = document.querySelector("img");
console.log(firstImageElem);
//Prev and next bars
const leftElement = document.querySelector(".prev");
const rightElement = document.querySelector(".next");
console.log(leftElement);
console.log(rightElement);
const allImages = document.querySelectorAll(".image_container");
console.log(allImages);
const allBullets = document.querySelectorAll(".bullet");
console.log(allBullets);

const slidesCount = allImages.length;
console.log(slidesCount);

// Events
//On prev and next bars
leftElement.addEventListener("click", onLeftClick);
rightElement.addEventListener("click", onRightClick);
//On left and right arrows
document.addEventListener("keydown", onKeyPress);
//Support mobile swipe
imgContainerElem.addEventListener("touchstart", onTouchStart);
imgContainerElem.addEventListener("touchend", onTouchEnd);
//Support touchpad
imgContainerElem.addEventListener("wheel", onWheelMove);
//Navigation button
allBullets.forEach(bullet => bullet.addEventListener("click", onBulletClick));


// Listeners
//Move to left with prev bar
function onLeftClick() {
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = slidesCount - 1;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;

    updateActiveBullet();
}

//Move to right with next bar
function onRightClick() {
    currentSlide++;

    if(currentSlide === slidesCount) {
        currentSlide = 0;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;

    updateActiveBullet();
}

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

function updateActiveBullet() {
    //console.log("I am here")

    allBullets.forEach(bullet => { bullet.style.color = "darkblue";});
    allBullets.item(currentSlide).style.color = "red";
}