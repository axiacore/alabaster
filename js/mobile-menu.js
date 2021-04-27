import ax3NoScroll from './no-scroll';

function ax3MobileMenu(options = {}) {
    options.mobileNav = options.mobileNav || '.js-mobile-menu';
    options.openBtn = options.openBtn || '.js-mobile-menu-btn-open';
    options.closeBtn = options.closeBtn || '.js-mobile-menu-btn-close';
    options.activeClass = options.activeClass || 'mobile-menu-active';
    options.onOpen = options.onOpen || (() => { });
    options.onClose = options.onClose || (() => { });

    let nav = document.querySelector(options.mobileNav);

    document.addEventListener('click', event => {
        if (event.target.closest(options.openBtn)) {
            nav.classList.add(options.activeClass);
            options.onOpen(event.target.closest(options.openBtn), nav);
            ax3NoScroll(true);
        }
        if (event.target.closest(options.closeBtn)) {
            nav.classList.remove(options.activeClass);
            options.onClose(event.target.closest(options.openBtn), nav);
            ax3NoScroll(false);
        }
    });
}

export default ax3MobileMenu;
