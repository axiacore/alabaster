function ax3NoScroll(fixed) {
    let scrollingElement = document.scrollingElement;
    let classScroll = 'no-scroll';
    if (fixed && scrollingElement.dataset.modalScrollTop === undefined) {
        let bodyOffset = scrollingElement.scrollTop;
        scrollingElement.style.top = `${-bodyOffset}px`;
        scrollingElement.dataset.modalScrollTop = bodyOffset;
        scrollingElement.classList.add(classScroll);
    } else if (!fixed) {
        scrollingElement.style.top = '';
        scrollingElement.classList.remove(classScroll);
        scrollingElement.scrollTop = scrollingElement.dataset.modalScrollTop;
        scrollingElement.removeAttribute('data-modal-scroll-top');
    }
}

export default ax3NoScroll;
