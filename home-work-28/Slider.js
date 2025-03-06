export class Slider {
    //variables
    currentSlide = 0;
    startX;
   // isOngoing = false;
   // slideTime = 1; //in seconds
   // animation;

    //parameters

    constructor() {
        // Query DOM elements (when several queries are required)
        this.imgContainerElem = document.querySelector(".slider");
        this.allImages = document.querySelectorAll(".image_container");
        this.firstImageElem = document.querySelector("img");
        this.allBullets = document.querySelectorAll(".bullet");

        // Check if there are images
        if (this.allImages.length === 0) {
            throw new Error('No images specified');
        } else {
            console.log(this.allImages);
            this.slidesCount = this.allImages.length;
        }

        //Call subscription during initialization of an instance
        this.barsSubscription();
        this.keyArrowsSubscription();
        this.wheelSubscription();
        this.touchSubscriptions();
        this.bulletsSubscription();

    }

    // Events/subscriptions
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

    //Support mobile swipe
    touchSubscriptions () {
        this.imgContainerElem.addEventListener("touchstart", this.onTouchStart.bind(this));
        this.imgContainerElem.addEventListener("touchend", this.onTouchEnd.bind(this));
    }

    //Navigation button
    bulletsSubscription() {
        this.allBullets.forEach(bullet => bullet.addEventListener("click", this.onBulletClick.bind(this)));
    }

    //Listeners
    //Move to left with prev bar
    onLeftClick() {
        this.currentSlide--;

        if(this.currentSlide < 0) {
            this.currentSlide = this.slidesCount - 1;
        }

        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;

        this.updateActiveBullet();
    }

    //Move to right with next bar
    onRightClick() {
        this.currentSlide++;

        if(this.currentSlide === this.slidesCount) {
            this.currentSlide = 0;
        }

        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;
        this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;

        this.updateActiveBullet();
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

    //"Log" start position on mobile touch.
    onTouchStart(event) {
        this.startX = event.touches[0].clientX;
    }

    //Swipe on mobile
    onTouchEnd(event) {
        let endX = event.changedTouches[0].clientX;

        if (this.startX > endX) {
            this.onRightClick();
        } else if (this.startX < endX) {
            this.onLeftClick();
        }
    }

    //Scroll slides with navigation bullets
    onBulletClick(event) {
        const index = Array.from(this.allBullets).indexOf(event.target);

        if (index !== -1) {
            //Update index of current slide
            this.currentSlide = index;
            this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;
        }

        this.updateActiveBullet();
    }

    //Change active (by color) bullet when slide is scrolled by any method
    updateActiveBullet() {
        this.allBullets.forEach(bullet => { bullet.style.color = "darkblue";});
        this.allBullets.item(this.currentSlide).style.color = "red";
    }

}