import {Slider} from "./Slider.js";

const slider = new Slider({
    barsColor: "dimgrey" //Check if object destructuring works as expected for default values
});

const sliderDuplicate = new Slider({
    sliderID:   "dupl_slider",
    slideTime: 4,
    imageLinks: ["assets/images_add/1.jpg", "assets/images_add/2.jpg", "assets/images_add/3.jpg", "assets/images_add/4.jpg", "assets/images_add/5.jpg", "assets/images_add/6.jpg"],
    barsColor: "red",
    barsHoverColor: "orange"
});
