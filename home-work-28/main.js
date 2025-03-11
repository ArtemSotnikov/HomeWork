import {Slider} from "./Slider.js";

const slider = new Slider("orig_slider");

const sliderDuplicate = new Slider("dupl_slider",
    4,
    ["assets/images_add/1.jpg", "assets/images_add/2.jpg", "assets/images_add/3.jpg", "assets/images_add/4.jpg", "assets/images_add/5.jpg", "assets/images_add/6.jpg"],
    "red",
    "orange");
