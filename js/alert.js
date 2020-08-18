import $ from 'jquery';

import ax3NoScroll from './no-scroll.js';

$.fn.extend({
    showAlert(html) {
        $.featherlight({
            html: html,
            closeOnEsc: false,
            closeTrigger: null,
            namespace: 'modal',
            variant: 'modal_alert',
            afterContent() {
                let that = this;
                ax3NoScroll(true);

                if (options.loadedCallback !== undefined) { options.loadedCallback(that); }

                that.$instance.find('.js-alert-btn-close').on('click', () => {
                    that.close();
                });

                that.$instance.find('.js-alert-btn-cancel').on('click', () => {
                    if (options.cancelCallback !== undefined) { options.cancelCallback(that); }
                    else { that.close(); }
                });

                that.$instance.find('.js-alert-btn-done').on('click', () => {
                    if (options.doneCallback !== undefined) { options.doneCallback(that); }
                    else { that.close(); }
                });
            },
            afterClose() {
                ax3NoScroll(false);
            }
        });
    }
});
