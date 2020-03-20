$.fn.extend({
    showAlert(options) {
        let template = Handlebars.compile(this.html());
        let defaultOptions = {
            type: 'info',
            doneBtn: 'Aceptar',
            cancelBtn: 'Cancelar',
            cancelCallback: undefined,
            doneCallback: undefined,
            loadedCallback: undefined,
        };

        $.featherlight({
            html: template($.extend(defaultOptions, options)),
            closeOnEsc: false,
            closeTrigger: null,
            namespace: 'modal',
            variant: 'modal_alert',
            afterContent() {
                let that = this;

                if (options.loadedCallback !== undefined) { options.loadedCallback(that); }

                that.$instance.find('.js-alert-btn-close').on('click', () => {
                    that.close();
                });

                that.$instance.find('.js-alert-btn-cancel').on('click', () => {
                    if (options.cancelCallback !== undefined) { options.cancelCallback(that); }
                    that.close();
                });

                that.$instance.find('.js-alert-btn-done').on('click', () => {
                    if (options.doneCallback !== undefined) { options.doneCallback(that); }
                    that.close();
                });
            }
        });
    }
});
