define(['jquery'], function($) {
    return function(fixed) {
        let scrollingElement = $(document.scrollingElement);
        let classScroll = 'no-scroll';
        if (fixed && scrollingElement.data('modal-scroll-top') === undefined) {
            let bodyOffset = scrollingElement.scrollTop();
            scrollingElement.css('top', `${-bodyOffset}px`).data('modal-scroll-top', bodyOffset).addClass(classScroll);
        } else if (!fixed) {
            scrollingElement.removeClass(classScroll).css('top', '').scrollTop(scrollingElement.data('modal-scroll-top')).removeData('modal-scroll-top');
        }
    };
});
