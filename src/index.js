import './styles.css';
import loadNavbar from './modules/navbar';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadFooter from './modules/footer';

const content = document.getElementById('content');

function render() {
  content.innerHTML = '';
  content.appendChild(loadNavbar());
  content.appendChild(loadHome());
  content.appendChild(loadFooter());
}

render();