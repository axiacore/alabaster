function ax3FileField(options = {}) {
    options.inputSelector = options.inputSelector || '.js-input-file';
    options.labelSelector = options.labelSelector || '.js-input-file-text';
    options.textLabel = options.textLabel || 'Seleccionar archivo';

    document.querySelectorAll(options.inputSelector).forEach(element => {
        element.addEventListener('change', event => {
            let fileName = options.textLabel;
            if (event.target.value) {
                fileName = event.target.value.split('\\').pop();
            }
            event.target.closest('.file-field').querySelector(options.labelSelector).innerHTML = fileName;
        });
    });
}

export default ax3FileField;
