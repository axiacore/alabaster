class MobileMenu {
    constructor(options) {
        this.mobileNav = options.mobileNav;
        this.openBtn = options.openBtn;
        this.closeBtn = options.closeBtn;
        this.activeClass = options.activeClass;
        this.onOpen = options.onOpen || (() => { });

        this.onInit();
    }

    onInit() {
        let that = this;
        let nav = $(that.mobileNav);

        $(that.openBtn).on('click', () => {
            nav.addClass(that.activeClass);
            that.onOpen();
            $(document.scrollingElement).css('overflow', 'hidden');
        });

        $(that.closeBtn).on('click', () => {
            nav.removeClass(that.activeClass);
            $(document.scrollingElement).css('overflow', 'auto');
        });
    }
}
