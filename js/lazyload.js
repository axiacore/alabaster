import LazyLoad from 'vanilla-lazyload';

function ax3Lazyload(options = {}) {
    options.image = options.image || '.js-lazyload-img';
    options.styleClass = options.styleClass || 'lazyload-hidden';

    let callbackLoaded = image => image.classList.remove(options.styleClass);
    if (options.loaded) {
        callbackLoaded = image => options.loaded(image);
    }

    return new LazyLoad({
        elements_selector: options.image,
        threshold: 0,
        callback_loaded: callbackLoaded
    });
}

export default ax3Lazyload;
