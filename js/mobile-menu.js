import ax3NoScroll from './no-scroll.js';

function ax3MobileMenu(options) {
    options.mobileNav;
    options.openBtn;
    options.closeBtn;
    options.activeClass;
    options.onOpen = options.onOpen || (() => { });
    options.onClose = options.onClose || (() => { });

    let nav = $(options.mobileNav);

    $(options.openBtn).on('click', () => {
        nav.addClass(options.activeClass);
        options.onOpen();
        ax3NoScroll(true);
    });

    $(options.closeBtn).on('click', () => {
        nav.removeClass(options.activeClass);
        options.onClose();
        ax3NoScroll(false);
    });
};

export default ax3MobileMenu;
