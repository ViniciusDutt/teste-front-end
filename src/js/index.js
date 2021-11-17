import '../css/styles.scss';
import logo from '../images/logo.png';
import ipad from '../images/ipad.png';
import favicon from '../images/favicon.png';
import Glide from '../../node_modules/@glidejs/glide'

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close(){
    mainMenu.style.right = '-100%';
}
new Glide('.glide', {
    type: 'carousel',
    dragThreshold: false,
    swipeThreshold: false,
    breakpoints: {
        768: {
            dragThreshold: true,
            swipeThreshold: true
        }
    }
  }).mount()