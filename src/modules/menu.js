function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('container');
    menu.innerHTML = `
        <h1>Our Delicious Menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus eget scelerisque convallis. Integer vel lacus eget tortor tristique laoreet.</p>
    `;
    return menu;
}

export default loadMenu;