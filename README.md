# Alabaster

## A lightweight and flexible tool set to build awesome web platform.

Alabaster is a sass tool sets develop to build awesome web site faster and easy. It's build especially on how we develop the frontend in [Axiacore](https://axiacore.com/).

## What you would find

We use a concept call modular scale to keep the vertical rhythm and consistency in our design. We develop some mixin so we can layout the design easy and faster.

You are going to find some helpers so you can write smooth Sass.

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

## Usage

Call the file `alabaster.sass` in the file that compile your Sass and be sure you call it before the Sass's files you use to build your web.

```sass
@import 'route-to-file/alabaster.sass'
@import 'header'
```

You can change the variables default value, by calling them before you call the `alabaster.sass` file and add !default to the end of the line.

```sass
$ratio: 1.333 !default

@import 'route-to-file/alabaster.sass'
@import 'header'
```

## Modular scale

Used to keep the vertical rhythm and consistency in our design.

##### Variables

Name | Default | Description
------ | ------- | -----------
$base-font-size | 100 | Font size for mobile in %
$base-font-size-tablet | 112.5 | Font size for tablet and above in %
$line-height | 1.45 | Line height fonts for mobile
$line-height-tablet | 1.7 | Line height fonts tablet and above
$ratio | 1.5 | Is multiplied by the base to produce the scale of numbers that are related

**Sass functions:**

`ms(value)` Returns a value in rem for the font size based in the modular scale.

`dms-rem-mobile(value)` Returns a value in rem for distances in mobile.

`dms-rem-tablet(value)` Returns a value in rem for distances in tablet and above.

`dms-px-mobile(value)` Returns a value in px for distances in mobile.

`dms-px-tablet(value)` Returns a value in px for distances in tablet and above.

## Responsive breakpoints

Alabaster is developed to be mobile first, we use media queries to create breakpoints for layouts. These breakpoints are based on minimum viewport widths and allow to scale up elements as the viewport changes.

##### Variables

Name | Default | Description
------ | ------- | -----------
$mobile | 500px | Media query breakpoint for 500px and above
$tablet | 768px | Media query breakpoint for 500px and above
$desktop | 994px | Media query breakpoint for 994px and above
$desktop-md| 1200px | Media query breakpoint for 1200px and above
$desktop-lg | 1400px | Media query breakpoint for 1400px and above

**Example:**

```sass
@include breakpoint($tablet)
	code here...
```

## Components

Alabaster includes the following components:

### Wrapper container

The `.wrapper-container` class is used to wrap all page content and give it a max width. It is used to preserve the design in very large screens.

##### Variables

Name | Default | Description
------ | ------- | -----------
$wrapper-container-max-width | 1920px | Max width of the container in px
$wrapper-container-shadow | 0 0 30px -15px rgba(0, 0, 0, 1) | Box shadow of the container
$wrapper-background-color | white | Background color of the container

**Example:**
	
	<body>
    	<div class="wrapper-container">
    		...
    	</div>
	</body>

### Container

The `.container` class is used to center content horizontally.

##### Variables

Name | Default | Description
------ | ------- | -----------
$container-max-width | 1230px | Max width of the container in px
$container-sm-max-width | 570px | Max width of the small container in px
$container-xs-max-width | 370px | Max width of the extra small container in px

**Example:**

    <div class="container">
    	...
    </div>
	<div class="container container_sm">
    	...
    </div>
	<div class="container container_xs">
    	...
    </div>

### Grid

Flexbox grid to build layouts.

##### Variables

Name | Default | Description
------ | ------- | -----------
$gutter | 11.5px | Space between columns in mobile
$gutter-tablet |11.5px | Space between columns in tablet and above
$columns-number | 12 | Columns number for the grid
$grid-background-color | rgba(black, .1) | Visual guide of columns grid (only develop)

Building a grid layout is simple:
1. Add class `.columns` to container
2. Add elements with class `.col`

**Example:**

    <div class="columns">
    	<div class="col"></div>
		<div class="col"></div>
    </div>

##### Modifiers in columns container

`.columns_no-gutter` Remove the space between columns.

	<div class="columns columns_no-gutter">
		...
	</div>

`.columns_no-gutter-x` Remove the space between columns in the x axis.

	<div class="columns columns_no-gutter-x">
		...
	</div>

`.columns_no-gutter-y` Remove the space between columns in the y axis.

	<div class="columns columns_no-gutter-y">
		...
	</div>

`.columns_gutter-sm` Reduce the space between columns to half of the value $gutter / $gutter-tablet.

	<div class="columns columns_gutter-sm">
		...
	</div>

`.columns_mobile` Display the grid for mobile.

	<div class="columns columns_mobile">
		...
	</div>

`.columns_mobile-xl` Display the grid for breakpoint $mobile and above.

	<div class="columns columns_mobile-xl">
		...
	</div>

`.columns_multiline` Columns items will wrap onto multiple lines.

	<div class="columns columns_multiline">
		...
	</div>

`.columns_centered` Center columns items horizontally.

	<div class="columns columns_centered">
		...
	</div>

`.columns_align-items-center` Align columns items to the top.

	<div class="columns columns_align-items-center">
		...
	</div>

`.columns_align-items-end` Align columns items to the bottom.

	<div class="columns columns_align-items-end">
		...
	</div>

`.columns_show-grid` Shows a visual guide of the grid for develop purpose.

	<div class="columns columns_show-grid">
		...
	</div>

##### Modifiers in columns element

`.col_x` Size of the column. X = number of columns (from 1 to $columns-number).

	<div class="columns">
		<div class="col col_2">...</div>
		<div class="col col_4">...</div>
	</div>

A column can have different sizes at each breakpoint:

	<div class="columns">
		<div class="col col_2 col_4-desktop">...</div>
		<div class="col col_4 col_2-desktop">...</div>
	</div>

`.col_offset-x` Size of the column offset. X = number of columns (from 0 to $columns-number - 1).

	<div class="columns">
		<div class="col col_2 col_offset-2">...</div>
		<div class="col col_4 col_offset-1">...</div>
	</div>

A column can have different offset sizes at each breakpoint:

	<div class="columns">
		<div class="col col_2 col_offset-2 col_offset-1-desktop">...</div>
		<div class="col col_4 col_offset-1 col_offset-2-desktop">...</div>
	</div>

`.col_narrow` Column take the space it needs.

	<div class="columns">
		<div class="col col_narrow">...</div>
		<div class="col">...</div>
	</div>

### Buttons

The `.btn` class can be used on  `<a>` `<button>`.

##### Variables

Name | Default | Description
------ | ------- | -----------
$btn-height | 30px | Height of the button in mobile
$btn-tablet-height | 40px | Height of the button in tablet and above
$btn-sm-height | 30px | Small height of the button in mobile
$btn-sm-tablet-height | $btn-sm-height | Small height of the button in tablet and above
$btn-lg-height | 50px | Large height of the button in mobile
$btn-lg-tablet-height | $btn-lg-height | Large height of the button in tablet and above
$btn-sides-padding | 12px | Sides padding of the button in mobile
$btn-sides-tablet-padding | $btn-sides-padding | Sides padding of the button in tablet and above
$btn-border-radius | 0 | Border radius of the button
$btn-icon-size | 24px | Size of the svg icon in mobile
$btn-icon-tablet-size | $btn-icon-size | Size of the svg icon in tablet and above
$icon-btn-default-size | 34px | Size of the icon button in mobile
$icon-btn-default-tablet-size | $icon-btn-default-size | Size of the icon button in tablet and above
$icon-btn-svg-default-size | 30px | Size of the svg icon button in mobile
$icon-btn-svg-default-tablet-size | $icon-btn-svg-default-size | Size of the svg icon button in tablet and above
$icon-btn-sm-size | 24px | Small size of the icon button in mobile
$icon-btn-sm-tablet-size | $icon-btn-sm-size | Small size of the icon button in tablet and above
$icon-btn-svg-sm-size | 20px | Small size of the svg icon button in mobile
$icon-btn-svg-sm-tablet-size | $icon-btn-svg-sm-size | Small size of the svg icon button in tablet and above
$icon-btn-lg-size | 44px | Large size of the icon button in mobile
$icon-btn-lg-tablet-size | $icon-btn-lg-size | Large size of the icon button in tablet and above
$icon-btn-svg-lg-size | 40px | Large size of the svg icon button in mobile
$icon-btn-svg-lg-tablet-size | $icon-btn-svg-lg-size | Large size of the svg icon button in tablet and above
$icon-btn-border-radius | 50% | Border radius of the icon button

**Examples:**

General button with text and svg icon:

	<button class="btn">Button</button>
	<button class="btn">
		<svg class="btn__svg">...</svg>
		Button
	</button>

The svg icon can be on the right:

	<button class="btn">
		<svg class="btn__svg btn__svg_right">...</svg>
		Button
	</button>

General icon button:

	<button class="btn btn_icon">
		<svg class="btn__svg">...</svg>
	</button>

##### Modifiers

`.btn_disabled` Buttons look inactive. Use only in `<a>`, for `<button>` add disabled attribute.

	<a class="btn btn_disabled">Button</a>
	<button class="btn" disabled>Button</button>

`.btn_is-full-width` Button width 100%.

	<button class="btn btn_is-full-width">Button</button>

`.btn_shadow` Button with box shadow.

	<button class="btn btn_shadow">Button</button>

`.btn_no-border` Button without border.

	<button class="btn btn_no-border">Button</button>

`.btn_sm` Small button.

	<button class="btn btn_sm">Button</button>
	<button class="btn btn_icon btn_sm">
		<svg class="btn__svg">...</svg>
	</button>

`.btn_lg` Large button.

	<button class="btn btn_lg">Button</button>
	<button class="btn btn_icon btn_lg">
		<svg class="btn__svg">...</svg>
	</button>

`.btn_outline` Remove the background color.

	<button class="btn btn_outline">Button</button>
	<button class="btn btn_icon btn_outline">
		<svg class="btn__svg">...</svg>
	</button>

### Forms

Simple form controls.

##### Variables

Name | Default | Description
------ | ------- | -----------
$inputs-height | 40px | Height of input in mobile
$inputs-tablet-height | $inputs-height | Height of input in tablet and above
$inputs-sides-padding | 12px | Sides padding of input in mobile
$inputs-sides-tablet-padding | $inputs-sides-padding | Sides padding of input in tablet and above
$textarea-height | 120px | Textarea height in mobile
$textarea-tablet-height | $textarea-height | Textarea height in tablet and above
$textarea-padding | 12px | Padding of textarea in mobile
$textarea-tablet-padding | $textarea-padding | Padding of textarea in tablet and above
$inputs-background-color | white | Background color of input
$inputs-readonly-background-color | white | Background color of input with attribute readonly
$inputs-color-text | #2b2b2b | Color text of input
$inputs-border-color | #ebebeb | Border color of input
$input-border-hover-color | #393939 | Border color of input in hover
$input-background-hover-color | white | Background color of input in hover
$input-border-focus-color | #2b2b2b | Border color of input in focus
$input-background-focus-color | white | Background color of input in focus
$select-arrow-color | #2b2b2b | Arrow color of `.select` class
$inputs-border-radius | 0 | Border radius of input
$field-help-text-color | $inputs-color-text | Text color of `.field__help-text` class
$field-error-color-text | #f00 | Text color of `.error` and `.errorlist` class

**Examples:**

General form control:

    <div class="field">
		<label class="field__label">Label<label>
		<input name="input">
		<div class="field__help-text"></div>
	</div>

##### Modifiers

`.field_no-margin` Remove the margin bottom.

	 <div class="field field_no-margin">
		<label class="field__label">Label<label>
		<input name="input">
	</div>

#### Select

For `<select>` tag is necessary add a container with class `.select`

    <div class="field">
		<label class="field__label">Label<label>
		<div class="select">
			<select name="select">...</select>
		</div>
		<div class="field__help-text"></div>
	</div>

##### Modifiers

`.select_disabled` Select disabled style.

	 <div class="select select_disabled">
		 <select name="select" disabled>...</select>
	 </div>

`.select_readonly` Select readonly style.

	 <div class="select select_readonly">
		 <select name="select" readonly>...</select>
	 </div>

`.select_is-multiple` Select multiple style.

	 <div class="select select_is-multiple">
		 <select name="select" multiple>...</select>
	 </div>

#### Checkbox and Radio button

For `<input type="checkbox">` and `<input type="radio">` is necessary the next structure:

	<label class="check-field">
		<input class="check-field__input" type="checkbox">
		<span class="check-field__icon"></span>
		<span class="check-field__label">Text label</span>
	</label>
	<label class="radio-field">
		<input class="radio-field__input" type="radio">
		<span class="radio-field__icon"></span>
		<span class="radio-field__label">Text label</span>
	</label>

##### Modifiers

`.check-field_icon-right` `.radio-field_icon-right` Changes the icon to the right.

	<label class="check-field check-field_icon-right">
		<input class="check-field__input" type="checkbox">
		<span class="check-field__icon"></span>
		<span class="check-field__label">Text label</span>
	</label>
	<label class="radio-field radio-field_icon-right">
		<input class="radio-field__input" type="radio">
		<span class="radio-field__icon"></span>
		<span class="radio-field__label">Text label</span>
	</label>

`.check-field_box` `.radio-field_box` Mixed style between general input and checkbox or radio button input.

	<label class="check-field check-field_box">
		<input class="check-field__input" type="checkbox">
		<span class="check-field__icon"></span>
		<span class="check-field__label">Text label</span>
	</label>
	<label class="radio-field radio-field_box">
		<input class="radio-field__input" type="radio">
		<span class="radio-field__icon"></span>
		<span class="radio-field__label">Text label</span>
	</label>

`.check-field_disabled` `.radio-field_disabled` Input disabled style.

	<label class="check-field check-field_disabled">
		<input class="check-field__input" type="checkbox" disabled>
		<span class="check-field__icon"></span>
		<span class="check-field__label">Text label</span>
	</label>
	<label class="radio-field radio-field_disabled">
		<input class="radio-field__input" type="radio" disabled>
		<span class="radio-field__icon"></span>
		<span class="radio-field__label">Text label</span>
	</label>

`.check-field_readonly` `.radio-field_readonly` Input readonly style.

	<label class="check-field check-field_readonly">
		<input class="check-field__input" type="checkbox" readonly>
		<span class="check-field__icon"></span>
		<span class="check-field__label">Text label</span>
	</label>
	<label class="radio-field radio-field_readonly">
		<input class="radio-field__input" type="radio" readonly>
		<span class="radio-field__icon"></span>
		<span class="radio-field__label">Text label</span>
	</label>

#### Number spinner

For create a number spinner input import the file `number-spinner.sass` in the file that compile your Sass and be sure you call it after the `alabaster.sass` file and before the Sass's files you use to build your web.

```sass
@import 'route-to-file/alabaster/alabaster'
@import 'route-to-file/alabaster/components/number-spinner'
@import 'header'
```

##### Variables

Name | Default | Description
------ | ------- | -----------
$number-spinner-height | 40px | Height of the number spinner
$number-spinner-width | 94px | Width of the number spinner

**Example:**

	<div class="number-spinner">
		<button class="number-spinner__btn">
			<svg class="number-spinner__svg">minus icon</svg>
		</button>
		<input class="number-spinner__input" type="number">
		<button class="number-spinner__btn">
			<svg class="number-spinner__svg">plus icon</svg>
		</button>
	</div>

#### Toggle

For create a toggle input import the file `toggle.sass` in the file that compile your Sass and be sure you call it after the `alabaster.sass` file and before the Sass's files you use to build your web.

```sass
@import 'route-to-file/alabaster/alabaster'
@import 'route-to-file/alabaster/components/toggle'
@import 'header'
```

##### Variables

Name | Default | Description
------ | ------- | -----------
$toggle-width | 80px | Width of the toggle
$toggle-padding | 5px | Padding of the toggle
$toggle-border | 1px | Border width of the toggle
$toggle-circle-size | 30px | Size of the status circle

**Example:**

	<label class="field-toggle">
		<input class="field-toggle__input" type="checkbox">
		<span class="field-toggle__container">
			<span class="field-toggle__circle"></span>
		</span>
	</label>

##### Modifiers

`.field-toggle__container_text` Adds text YES and NO to the toggle.

    <label class="field-toggle">
		<input class="field-toggle__input" type="checkbox">
		<span class="field-toggle__container field-toggle__container_text">
			<span class="field-toggle__circle"></span>
		</span>
	</label>

### Icons

The `.icon` class is a container for a svg icon.

##### Variables

Name | Default | Description
------ | ------- | -----------
$icon-default-size | 50px | Size of icon in mobile
$icon-default-tablet-size | $icon-default-size | Size of icon in tablet and above
$icon-svg-default-size | 35px | Size of svg icon in mobile
$icon-svg-default-tablet-size | $icon-svg-default-size | Size of svg icon in tablet and above
$icon-sm-size | 40px | Small size of icon in mobile
$icon-sm-tablet-size | $icon-sm-size | Small size of icon in tablet and above
$icon-svg-sm-size | 25px | Small size of svg icon in mobile
$icon-svg-sm-tablet-size | $icon-svg-sm-size | Small size of svg icon in tablet and above
$icon-lg-size | 90px | Large size of icon in mobile
$icon-lg-tablet-size | $icon-lg-size | Large size of icon in tablet and above
$icon-svg-lg-size | 50px | Large size of svg icon in mobile
$icon-svg-lg-tablet-size | $icon-svg-lg-size | Large size of svg icon in tablet and above
$icon-border-radius | 50% | Border radius of icon

**Example:**

    <span class="icon">
		<svg class="icon__svg"></svg>
	</span>

##### Modifiers

`.icon_sm` Small icon.

    <span class="icon icon_sm">
		<svg class="icon__svg"></svg>
	</span>

`.icon_lg` Large icon.

    <span class="icon icon_lg">
		<svg class="icon__svg"></svg>
	</span>

`.icon_outline` Remove the background color.

    <span class="icon icon_outline">
		<svg class="icon__svg"></svg>
	</span>

## Helpers

Alabaster include somes helpers to make easy sass.

### Position

Provides a method for setting an element's positioning properties: position, top, right, bottom and left. Use a null value to skip an edge of the box.

**Example:**

```sass
.element
	@include position(absolute, 10px null null 1rem)
```

### Size

Sets the width and height of the element.

**Example:**

```sass
.element
	@include size(100px, 2em)
```

### Clearfix

Provides a way to include a clearfix for containing floats.

**Example:**

```sass
.element
	@include clearfix
```

### Font smooth

Provides a way to controls the application of anti-aliasing when fonts are rendered.

**Example:**

```sass
.element
	@include font-smooth
```

### Prefixer

Generates vendor prefixes.

##### Arguments

Name | Type | Description
------ | ------- | -----------
$property | string  | Property to prefix
$value | string  | Value to use
$prefixes | list | Vendor prefixes to output

**Example:**

```sass
.element
	@include prefix(appearance, none, webkit moz)
```

### Column width

Provides a way to get the size of a column in percentage.

**Example:**

```sass
.element
	@include column-width(2)
```

### Column offset

Provides a way to get the offset of a column in percentage.

**Example:**

```sass
.element
	@include column-offset(2)
```

## Classes

Alabaster include some classes to help easily the construction of html.

### Fit image

The `.fit-image` class add the property object fit = cover to `<img>` tag.

**Example:**

	<figure>
		<img class="fit-image" src="image.jpg" alt="image">
	</figure>

### Off screen

The `.off-screen` class hides elements in the screen.

**Example:**

	<section>
		<h1 class="off-screen">Section title</h1>
		<div>...</div>
	</section>

### Text align

The `.text-center` and `.text-right` classes changes the text align.

**Example:**

	<div>
		<p class="text-center">Some text aligned to the center</p>
		<p class="text-right">Some text aligned to the right</p>
	</div>

### Flex

Alabaster offers some classes to create grid flex easily.

The `.flex` class define a container with flex display.

**Example:**

	<div class="flex">
		...
	</div>

The `.column-flex` class change the direction from row to column.

**Example:**

	<div class="flex column-flex">
		...
	</div>

The `.no-wrap-flex` class change the wrap property from wrap to nowrap.

**Example:**

	<div class="flex no-wrap-flex">
		...
	</div>

The `.justify-content-space-between` class apply justify content = space between.

**Example:**

	<div class="flex justify-content-space-between">
		...
	</div>

The `.justify-content-space-around` class apply justify content = space around.

**Example:**

	<div class="flex justify-content-space-around">
		...
	</div>

The `.justify-content-flex-start` class apply justify content = flex start.

**Example:**

	<div class="flex justify-content-flex-start">
		...
	</div>

The `.justify-content-center` class apply justify content = center.

**Example:**

	<div class="flex justify-content-center">
		...
	</div>

The `.justify-content-flex-end` class apply justify content = flex end.

**Example:**

	<div class="flex justify-content-flex-end">
		...
	</div>

The `.align-items-flex-start` class apply align items = flex start.

**Example:**

	<div class="flex align-items-flex-start">
		...
	</div>

The `.align-items-center` class apply align items = center.

**Example:**

	<div class="flex align-items-center">
		...
	</div>

The `.align-items-flex-end` class apply align items = flex end.

**Example:**

	<div class="flex align-items-flex-end">
		...
	</div>

Brought to you by the lovely folks at [Axiacore](https://axiacore.com/)
