export class Slider {
    //variables
    currentSlide = 0;
    startX;
    isOngoing = false;
    animation;
    isStartedByButton = false;

    //parameters
    slideTime = 1; //in seconds

    imageLinks = [
        "assets/images/1.jpg",
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg",
        "assets/images/5.jpg"
    ];

    constructor() {

        this.generateImages();

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
        this.startStopElSubscription();
        this.stopAnimationSubscription();
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

    startStopElSubscription() {
        document.querySelector(".start_stop").addEventListener("click", this.onStartStop.bind(this));
    }

    stopAnimationSubscription() {
        this.imgContainerElem.addEventListener("mousemove", this.onImageStop.bind(this));
        this.imgContainerElem.addEventListener("mouseout", this.onImageStart.bind(this));
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

    //Start stop automatic scrolling of slides
    onStartStop(event) {
        if (!this.isOngoing) {
            this.isOngoing = true;
            this.isStartedByButton = true;

            this.animation = setInterval(this.onRightClick.bind(this), this.slideTime * 1000);
        } else {
            this.isOngoing = false;
            this.isStartedByButton = false;

            clearInterval(this.animation);
        }
    }

    onImageStop(event) {
        if (this.isOngoing && this.isStartedByButton) {
            this.isOngoing = false;
            clearInterval(this.animation);
        }
    }

    onImageStart() {
        if (!this.isOngoing && this.isStartedByButton) {
            this.onStartStop();
        }
    }

    //In .slider generate .image_containers with images from the given links
    generateImages() {
        let resultHtml = '';
        this.imageLinks.forEach(imageLink => {
            resultHtml += `
                <div class="image_container">
                    <img src="${imageLink}" alt="image">
                </div>
            `;
        });
        document.querySelector(".slider").innerHTML = resultHtml;
    }
}