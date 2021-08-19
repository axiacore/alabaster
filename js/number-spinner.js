class Ax3NumberSpinner {
    constructor(options = {}) {
        this.spinnerSelector = options.spinnerSelector || '.js-number-spinner';
        this.btnMinusSelector = options.btnMinusSelector || '.js-number-spinner-btn-minus';
        this.btnPlusSelector = options.btnPlusSelector || '.js-number-spinner-btn-plus';
        this.onReady = options.onReady || (() => { });
        this.changeEnded = options.changeEnded || (() => { });
        this.onMaxValue = options.onMaxValue || (() => { });
        this.onMinValue = options.onMinValue || (() => { });
        this.onRangeValue = options.onRangeValue || (() => { });

        this.init(this);
    }

    init(that) {
        document.querySelectorAll(that.spinnerSelector).forEach(spinner => {
            let input = spinner.querySelector('input');

            input.value = input.value == '' ? 0 : input.value;

            spinner.querySelector(that.btnMinusSelector).addEventListener('click', () => {
                that.onChange(spinner, false);
            });

            spinner.querySelector(that.btnPlusSelector).addEventListener('click', () => {
                that.onChange(spinner, true);
            });

            that.onReady(input, spinner, that);
        });
    }

    onChange(numberSpinner, increase) {
        let that = this;
        let input = numberSpinner.querySelector('input');
        let inputValue = parseInt(input.value);
        let maxValue = parseInt(input.getAttribute('max'));
        let minValue = parseInt(input.getAttribute('min'));
        let stepValue = input.getAttribute('step') ? parseInt(input.getAttribute('step')) : 1;
        let newValue;

        if (increase) {
            if (!isNaN(maxValue)) {
                newValue = inputValue < maxValue ? inputValue + stepValue : maxValue;
            } else {
                newValue = inputValue + stepValue;
            }
        } else {
            if (!isNaN(minValue)) {
                newValue = inputValue > minValue ? inputValue - stepValue : minValue;
            } else {
                newValue = inputValue - stepValue;
            }
        }

        input.value = newValue;

        that.changeEnded(input, numberSpinner, that);

        if (newValue == minValue) {
            numberSpinner.classList.add('number-spinner-min-value');
            that.onMinValue(input, numberSpinner, that);
        } else {
            numberSpinner.classList.remove('number-spinner-min-value');
        }

        if (newValue == maxValue) {
            numberSpinner.classList.add('number-spinner-max-value');
            that.onMaxValue(input, numberSpinner, that);
        } else {
            numberSpinner.classList.remove('number-spinner-max-value');
        }

        if (newValue > minValue && newValue < maxValue) {
            that.onRangeValue(input, numberSpinner, that);
        }
    }
}

export default Ax3NumberSpinner;
