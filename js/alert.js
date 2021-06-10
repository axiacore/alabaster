import $ from 'jquery';
import 'featherlight';

import ax3NoScroll from './no-scroll';

function ax3ShowAlert(html, options = {}) {
    $.featherlight({
        html: html,
        closeOnEsc: false,
        closeTrigger: null,
        namespace: 'modal',
        variant: 'modal-alert',
        afterContent() {
            let that = this;
            ax3NoScroll(true);

            that.$instance.find('.js-alert-btn-close').on('click', () => {
                that.close();
            });

            if (options.loadedCallback !== undefined) { options.loadedCallback(that); }

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
};

export default ax3ShowAlert;
