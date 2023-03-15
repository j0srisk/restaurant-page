import './styles.css';
import loadNavbar from './modules/navbar';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';
import loadFooter from './modules/footer';

const content = document.getElementById('content');

function render(page) {
    content.innerHTML = '';
    let navbar = loadNavbar();
    content.appendChild(navbar);
    const homeLink = navbar.querySelector('#home');
    const menuLink = navbar.querySelector('#menu');
    const contactLink = navbar.querySelector('#contact');
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
    content.appendChild(page);
    content.appendChild(loadFooter());
}

render(loadHome());