import Post from './post'
import './css/style.scss';
import icon_square_big from './assets/images/icon-square-big.png';
import moment from 'moment';

const logoDiv = document.querySelector('.logo');
const img = document.createElement('img');
img.src = icon_square_big;
img.alt = 'Logo';
img.setAttribute("width", "200px");
img.setAttribute("height", "200px");
logoDiv.appendChild(img);

const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Current time:', now);

const testBabel = () => console.log('Babel works!');
testBabel();