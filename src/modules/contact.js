function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('container');
    contact.innerHTML = `
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus eget scelerisque convallis. Integer vel lacus eget tortor tristique laoreet.</p>
    `;
    return contact;
}

export default loadContact;