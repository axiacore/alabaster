import LazyLoad from 'vanilla-lazyload';

function ax3Lazyload(options = {}) {
    options.image = options.image || '.js-lazyload-img';
    options.styleClass = options.styleClass || 'lazyload-loading__img_hidden';


    new LazyLoad({
        elements_selector: '.js-lazyload-img',
        threshold: 0,
        callback_loaded: element => {
            element.classList.remove(options.styleClass);
        }
    });
}

export default ax3Lazyload;
