# Alabaster

## A lightweight and flexible tool set to build awesome web platform.

Alabaster is a js tool sets develop to build awesome web site faster and easy. It's build especially on how we develop the frontend in [Axiacore](https://axiacore.com/).

## Quick install

Alabaster is constantly in development.

#### Yarn

```bash
yarn add alabaster
```

**or**

#### NPM

```bash
npm i alabaster
```

## JS Plugins

Alabaster js plugins are made with webpack integration to help easily the interaction of html.

### No scroll

This function allow lock the scroll of the page, import the `ax3NoScroll` function in your js code.

```js
import ax3NoScroll from 'alabaster/js/no-scroll';
```

#### JS parameters

Name | Type | Description
------ | ------ | -----------
fixed | Boolean | Toggle overflow of the page

**Example:**

```js
// Lock scroll page
ax3NoScroll(true);

// Unlock scroll page
ax3NoScroll(false);
```

### Mobile menu

For implement menu mobile functionality import the `ax3MobileMenu` function in your js code.

```js
import ax3MobileMenu from 'alabaster/js/mobile-menu';
```

#### JS parameters

Name | Type | Default | Description
------ | ------ | ------ | -----------
mobileNav | string | .js-mobile-menu | Mobile menu selector
openBtn | string | .js-mobile-menu-btn-open | Button selector that open menu
closeBtn | string | .js-mobile-menu-btn-close | Button selector that close menu
activeClass | string | mobile-menu-active | Css class for mobile menu active
onOpen | function | --- | Event fired after open menu
onClose | function | --- | Event fired after close menu

Note: onOpen and onClose events returns 2 parameters: btnTrigger, nav.

**Example:**

```js
ax3MobileMenu();

// or 

ax3MobileMenu({
	mobileNav: '.js-new-selector',
	openBtn: '.js-new-selector-btn-open',
	closeBtn: '.js-new-selector-btn-close',
	activeClass: 'new-class-active',
	onOpen: function (btn, nav) {
		// Code here
	},
	onClose: function (btn, nav) {
		// Code here
	}
});
```

### Alert

For show an alert import the `ax3NoScroll` function in your js code.

```js
import ax3ShowAlert from 'alabaster/js/alert';
```

#### JS parameters

Name | Type | Default | Description
------ | ------ | ------ | -----------
html | string | --- | Html string template to show in the alert
options | object | {} | Load callbacks events: loadedCallback, cancelCallback and doneCallback

Notes:
- In axiacore we use [handlebarsjs](https://handlebarsjs.com/) for html template.
- All events returns 1 parameter: [featherlight](https://noelboss.github.io/featherlight/) instance.

**Example:**

```js
ax3ShowAlert(Handlebars.templates.alertModal({
    info: true, // Type alert info
    error: false, // Type alert error
    warning: false, // Type alert warning
    success: false, // Type alert success
    title: 'Alert title',
    text: 'Alert text',
    cancelBtn: 'Cancel', // Pass false to disable btn
    doneBtn: 'Ok'
}), {
    loadedCallback: function (modal) {
        // Code here
    },
    cancelCallback: function (modal) {
        // Code here
    },
    doneCallback: function (modal) {
        // Code here
    }
});
```

### Lazyload

For implement lazyload images import the `ax3Lazyload` function in your js code.

```js
import ax3Lazyload from 'alabaster/js/lazyload';
```

#### JS parameters

Name | Type | Default | Description
------ | ------ | ------ | -----------
image | string | .js-lazyload-img | Img selector
styleClass | string | lazyload-hidden | Class to remove once image is loaded

**Example:**

```js
ax3Lazyload();

// or

ax3Lazyload({
    image: '.js-new-selector-img',
    styleClass: 'new-class-lazyload'
});
```

### Input file

For create an input file import the `ax3FileField` function in your js code.

```js
import ax3FileField from 'alabaster/js/file-field';
```

#### JS parameters

Name | Type | Default | Description
------ | ------ | ------ | -----------
inputSelector | string | .js-input-file | Input file selector
labelSelector | string | .js-input-file-text | Text label selector
textLabel | string | Seleccionar archivo | Initial / empty text for input

**Example:**

	<label class="file-field">
		<input type="file" class="js-input-file file-field-input">
		<span class="js-input-file-text file-field-label">Seleccionar archivo</span>
		<span class="file-field-icon">
            <svg class="file-field-icon-svg">...</svg>
        </span>
	</label>

```js
ax3FileField();

// or

ax3FileField({
	inputSelector: '.js-new-input-file-selector',
	labelSelector: '.js-new-input-file-text-selector',
	textLabel: 'New text input'
});
```

### Number spinner

For create a number spinner input import the `Ax3NumberSpinner` class in your js code.

```js
import Ax3NumberSpinner from 'alabaster/js/number-spinner';
```

#### JS parameters

Name | Type | Default | Description
------ | ------ | ------ | -----------
spinnerSelector | string | .js-number-spinner | Number spinner selector
btnMinusSelector | string | .js-number-spinner-btn-minus | Minus button selector
btnPlusSelector | string | .js-number-spinner-btn-plus | Plus button selector
onReady | function | --- | Event fired when number spinner is ready
changeEnded | function | --- | Event fired when input value change
onMaxValue | function | --- | Event fired when input value is equal to max value
onMinValue | function | --- | Event fired when input value is equal to min value
onRangeValue | function | --- | Event fired when input value is between min value and max value

Notes:
- For set max, min, step values use html attributes `<input min="0" max="20" step="5">`.
- All events returns 3 parameters: inputElement, numberSpinnerElement, classInstance.
- In min and max events is added the classes `number-spinner-min-value` and` number-spinner-max-value` respectively in the number spinner item for edit styles.

**Example:**

	<div class="js-number-spinner number-spinner">
        <button class="js-number-spinner-btn-minus number-spinner-btn-minus" type="button">
            <svg class="number-spinner-btn-svg">...</svg>
        </button>
        <input class="number-spinner-input" type="number" readonly>
        <button class="js-number-spinner-btn-plus number-spinner-btn-plus" type="button">
            <svg class="number-spinner-btn-svg">...</svg>
        </button>
    </div>

```js
new Ax3NumberSpinner();

// or

new Ax3NumberSpinner({
	inputSelector: '.js-new-input-file-selector',
	labelSelector: '.js-new-input-file-text-selector',
	textLabel: 'New text input',
    onReady: function(input, numberSpinner, instance) {
        // Code here
    },
    changeEnded: function(input, numberSpinner, instance) {
        // Code here
    },
    onMaxValue: function(input, numberSpinner, instance) {
        // Code here
    },
    onMinValue: function(input, numberSpinner, instance) {
        // Code here
    },
    onRangeValue: function(input, numberSpinner, instance) {
        // Code here
    }
});
```
