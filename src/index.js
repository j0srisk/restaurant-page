import './styles.css';
import loadNavbar from './modules/navbar';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';
import loadFooter from './modules/footer';

const content = document.getElementById('content');

function addListeners() {
    const homeLink = document.querySelector('#home');
    const menuLink = document.querySelector('#menu');
    const contactLink = document.querySelector('#contact');
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Home link clicked');
        render(loadHome());
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Menu link clicked');
        render(loadMenu());
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Contact link clicked');
        render(loadContact());
    });
}

function render(page) {
    content.innerHTML = '';
    content.appendChild(loadNavbar());
    addListeners();
    content.appendChild(page);
    content.appendChild(loadFooter());
}

render(loadHome());