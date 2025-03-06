export class Slider {
    //variables
    currentSlide = 0;
   // startX;
   // isOngoing = false;
   // slideTime = 1; //in seconds
   // animation;

    //parameters

    constructor() {
        // Query DOM elements (when several queries are required)
        this.imgContainerElem = document.querySelector(".slider");
        this.allImages = document.querySelectorAll(".image_container");
        this.firstImageElem = document.querySelector("img");

        // Check if there are images
        if (this.allImages.length === 0) {
            throw new Error('No images specified');
        } else {
            console.log(this.allImages);
        }
        this.slidesCount = this.allImages.length;


        this.barsSubscription();
        this.keyArrowsSubscription();
        this.wheelSubscription();

    }

    // Events
    //On prev and next bars
    barsSubscription() {
        //Move to left with prev bar
        document.querySelector(".prev").addEventListener("click", this.onLeftClick.bind(this));
        //Move to right with next bar
        document.querySelector(".next").addEventListener("click", this.onRightClick.bind(this));
    }

    //On left and right arrows
    keyArrowsSubscription() {
        document.addEventListener("keydown", this.onKeyPress.bind(this));
    }

    //Support touchpad
    wheelSubscription() {
        this.imgContainerElem.addEventListener("wheel", this.onWheelMove.bind(this));
    }

    //Move to left with prev bar
    onLeftClick() {
        this.currentSlide--;

        if(this.currentSlide < 0) {
            this.currentSlide = this.slidesCount - 1;
        }

        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;

    //    updateActiveBullet();
    }

    //Move to right with next bar
    onRightClick() {
        this.currentSlide++;

        if(this.currentSlide === this.slidesCount) {
            this.currentSlide = 0;
        }

        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;
        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;

        //updateActiveBullet();
    }

    //Check left or right key press then activate functionality of respective bars
    onKeyPress(event) {
        if (event.key === "ArrowLeft") {
            this.onLeftClick();
        } else if (event.key === "ArrowRight") {
            this.onRightClick();
        }
    }

    //Move on touchpad
    onWheelMove(event) {
        //Introduce some threshold, otherwise uncontrollable behaviour (too "sensitive"/fast)
        const thresholdMoveWheel = 20; //px

        if (event.deltaX > thresholdMoveWheel) {
            //console.log(event.deltaX);
            this.onRightClick();
        } else if (event.deltaX < -thresholdMoveWheel) {
            this.onLeftClick();
        }
    }


}