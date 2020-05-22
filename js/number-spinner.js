define(['jquery'], function ($) {
    $.fn.extend({
        numberSpinner(options) {
            $(this).each(function (index, element) {
                new NumberSpinner($.extend(options, { spinnerItem: $(element) }));
            });
        }
    });

    class NumberSpinner {
        constructor(options) {
            this.spinnerItem = options.spinnerItem;
            this.btnMinusSelector = options.btnMinusSelector || '.js-number-spinner-btn-minus';
            this.btnPlusSelector = options.btnPlusSelector || '.js-number-spinner-btn-plus';
            this.input = this.spinnerItem.find('input');
            this.maxVal = undefined;
            this.minVal = undefined;
            this.step = 1;
            this.val = 0;
            this.onReady = options.onReady || (() => { });
            this.changeEnded = options.changeEnded || (() => { });
            this.onMaxValue = options.onMaxValue || (() => { });
            this.onMinValue = options.onMinValue || (() => { });

            this.onInit();
        }

        onInit() {
            let that = this;
            let initVal = parseInt(that.input.val(), 10);
            let maxVal = parseInt(that.input.attr('max'), 10);
            let minVal = parseInt(that.input.attr('min'), 10);
            let step = parseInt(that.input.attr('step'), 10);

            if (!isNaN(initVal)) {
                that.val = initVal;
            }

            if (!isNaN(maxVal)) {
                that.maxVal = maxVal;
            }

            if (!isNaN(minVal)) {
                that.minVal = minVal;
            }

            if (!isNaN(step)) {
                that.step = step;
            }

            that.input.val(that.val);

            that.spinnerItem.find(that.btnMinusSelector).on('click', function () {
                that.onChange(false);
            });

            that.spinnerItem.find(that.btnPlusSelector).on('click', function () {
                that.onChange(true);
            });

            that.onReady();
        }

        onChange(increase) {
            let that = this;
            let val = parseInt(that.input.val(), 10);

            if (increase) {
                if (that.maxVal != undefined) {
                    that.val = val < that.maxVal ? (val + that.step) : that.maxVal;
                } else {
                    that.val = val + that.step;
                }
            } else {
                if (that.minVal != undefined) {
                    that.val = val > that.minVal ? (val - that.step) : that.minVal;
                } else {
                    that.val = val - that.step;
                }
            }
            that.input.val(that.val);

            that.changeEnded();

            if (that.val == that.maxVal) {
                that.onMaxValue();
            }

            if (that.val == that.minVal) {
                that.onMinValue();
            }
        }
    }
});
