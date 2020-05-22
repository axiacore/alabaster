define(['jquery'], function ($) {
    return function (options) {
        options.inputSelector = options.inputSelector || '.js-input-file';
        options.labelSelector = options.labelSelector || '.js-file-text';
        options.textLabel = options.textLabel || 'Seleccionar archivo';

        $(options.inputSelector).on('change', function (event) {
            let label = $(this).parent().find(options.labelSelector);
            let fileName = options.textLabel;
            if (event.target.value) {
                fileName = event.target.value.split('\\').pop();
            }
            label.html(fileName);
        });
    };
});
