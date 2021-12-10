function ax3NoScroll(fixed) {
    let classScroll = 'no-scroll';
    let body = document.body;
    let html = document.getElementsByTagName('html')[0];

    if (fixed && body.dataset.modalScrollTop === undefined) {
        const scrollY = window.scrollY;
        html.classList.add(classScroll);
        body.style.top = `${-scrollY}px`;
        body.dataset.modalScrollTop = scrollY;
    } else if (!fixed) {
        html.classList.remove(classScroll);
        window.scrollTo(0, parseInt(body.dataset.modalScrollTop || '0'));
        body.style.top = '';
        body.removeAttribute('data-modal-scroll-top');
    }
}

export default ax3NoScroll;
