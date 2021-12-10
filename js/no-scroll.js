function ax3NoScroll(fixed) {
    let classScroll = 'no-scroll';
    let body = document.body;

    if (fixed && body.dataset.modalScrollTop === undefined) {
        const scrollY = window.scrollY;
        body.style.top = `${-scrollY}px`;
        body.dataset.modalScrollTop = scrollY;
        body.classList.add(classScroll);
    } else if (!fixed) {
        window.scrollTo(0, parseInt(body.dataset.modalScrollTop || '0'));
        body.style.top = '';
        body.removeAttribute('data-modal-scroll-top');
        body.classList.remove(classScroll);
    }
}

export default ax3NoScroll;
