define(['jquery', 'noScroll'], function ($, noScroll) {
    return function (options) {
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
            noScroll(true);
        });

        $(options.closeBtn).on('click', () => {
            nav.removeClass(options.activeClass);
            options.onClose();
            noScroll(false);
        });
    };
});
