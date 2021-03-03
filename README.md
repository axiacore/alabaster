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

Create a new js ax3MobileMenu object.

#### JS parameters

Name | Description
------ | -----------
mobileNav | Selector for mobile menu
openBtn | Selector for button that open menu
closeBtn | Selector for button that close menu
activeClass | Css class for mobile menu active
onOpen | Event will be fired after menu open
onClose | Event will be fired after menu close

**Example:**

```js
ax3MobileMenu({
	mobileNav: '.js-mobile-menu',
	openBtn: '.js-mobile-menu-btn-open',
	closeBtn: '.js-mobile-menu-btn-close',
	activeClass: 'mobile-menu_active',
	onOpen: function () {
		// open event
	},
	onClose: function () {
		// close event
	}
});
```
