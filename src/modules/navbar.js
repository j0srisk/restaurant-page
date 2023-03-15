import loadMenu from "./menu";

function loadNavbar() {
    const navbar = document.createElement('nav');
    navbar.innerHTML = `
        <a href="#" class="nav-link" id="home">Home</a>
        <a href="#" class="nav-link" id="menu">Menu</a>
        <a href="#" class="nav-link" id="contact">Contact</a>
    `;
    return navbar;
}

export default loadNavbar;