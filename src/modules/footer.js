function loadFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <a href="#" id="copyright">Copyright Joseph Risk</a>
    `;
    return footer;
}

export default loadFooter;