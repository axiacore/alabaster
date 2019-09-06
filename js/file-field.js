class FileField {
    constructor(options = {}) {
        this.inputSelector = options.inputSelector || '.js-input-file';
        this.labelSelector = options.labelSelector || '.js-file-text';
        this.textLabel = options.textLabel || 'Seleccionar archivo';

        this.onInit();
    }

    onInit() {
        let that = this;

        $(that.inputSelector).on('change', function (event) {
            let label = $(this).parent().find(that.labelSelector);
            let fileName = that.textLabel;
            if (event.target.value) {
                fileName = event.target.value.split('\\').pop();
            }
            label.html(fileName);
        });
    }
}
