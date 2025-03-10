import {Slider} from "./Slider.js";

const slider = new Slider("orig_slider");

const sliderDuplicate = new Slider("dupl_slider",
    ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg"],
    "red",
    "orange");
