import {Slider} from "./Slider.js";

const slider = new Slider({ });

// Variables
let isOngoing = false;
const slideTime = 2; //in seconds
let animation;

// Query DOM elements
const startStopElem = document.querySelector(".start_stop");
console.log(startStopElem);



// Events

//Navigation button
//allBullets.forEach(bullet => bullet.addEventListener("click", onBulletClick));
startStopElem.addEventListener("click", onStartStop);


// Listeners

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