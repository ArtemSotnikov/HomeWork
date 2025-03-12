# Simple JavaScript Slider

A **lightweight and customizable image slider** built with **vanilla JavaScript**, **HTML**, and **CSS**. It supports several sliders at one web page (default 2 slider). Possible navigation via buttons, key arrows, touch, and auto-play.

## Preview

![Slider](https://github.com/user-attachments/assets/f9f67b84-8c11-44d4-90a2-3f9bd20e14b0)

## Features

-  **Image sliding** in both directions with navigation buttons/bars  
-  **Keyboard arrow navigation**  
-  **Touch and swipe support** for mobile devices  
-  **Auto-play functionality**  
-  **Customizable styles and settings**: number of slides, sliding time, navigation bars coloros   

##  Installation

Clone this repository:
git clone https://github.com/ArtemSotnikov/HomeWork/tree/240f9c9c6e469e0451b71b2365a41b17d78aba49/home-work-28

Open **index.html** in a browser to see it in action.

## Usage

The slider is instantiated in main.js. By default, it creates two sliders with different settings.<br/>
The slider creates image containers dynamically based on the imageLinks array.<br/>
Navigation controls are generated, including left/right arrows and bullets for slide selection.<br/>
In **.css** number of slides need to be specified, if number of images > 6: _grid-template-columns: repeat(6, 100%);_

## Slider reposidtory structure

├── README.md/<br/>
├── assets/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── images/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Default images<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── images_add/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Additional images for slider<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── styles/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# CSS stylesheets<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── normalize.css<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── style.css<br/>
├── index.html&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# HTML page to load the slider<br/>
├── Slider.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# JavaScript logic for the slider<br/>
├── main.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Initializes the sliders and sets custom options<br/>
├── README.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# This file<br/>
