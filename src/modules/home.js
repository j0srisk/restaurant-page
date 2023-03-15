function loadHome() {
    const home = document.createElement('div');
    home.classList.add('container');
    home.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus eget scelerisque convallis. Integer vel lacus eget tortor tristique laoreet.</p>
    `;
    return home;
}

export default loadHome;