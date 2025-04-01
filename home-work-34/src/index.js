import Post from './post'
import './style.css';
import icon_square_big from './assets/images/icon-square-big.png';

const logoDiv = document.querySelector('.logo');
const img = document.createElement('img');
img.src = icon_square_big;
img.alt = 'Logo';
img.setAttribute("width", "200px");
img.setAttribute("height", "200px");
logoDiv.appendChild(img);