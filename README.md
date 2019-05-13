# Alabaster

## A lightweight and flexible tool set to build awesome web platform.

Alabaster is a sass tool sets develop to build awesome web site faster and easy. It's build especially on how we develop the frontend in Axiacore.

## What you would find

We use a concept call modular scale to keep the vertical rhythm and consistency in our design. We develop some mixin so we can layout the design easy and faster.

You are going to find some helpers so you can write smooth Sass.

## Quick install

Alabaster is constantly in development.

### Yarn

```bash
yarn add alabaster
```

**or**

### NPM

```bash
npm i alabaster
```

## Usage

Call the file `alabaster.sass` in the file that compile your Sass and be sure you call it before the Sass's files you use to build your web.

```sass
@import "route-to-file/alabaster.sass"
@import "header"
```

You can change the varibles default value, by calling them before you call the `alabaster.sass` file and add !default to the end of the line.

```sass
$ratio: 1.333 !default

@import "route-to-file/alabaster.sass"
@import "header"
```

## Components

### Modular scale

Variable | Default | Description
------ | ------- | -----------
$base-font-size | 100 | Font size for mobile in %
$base-font-size-tablet | 112.5 | Font size for tablet and above in %
$line-height | 1.45 | Line height fonts for mobile
$line-height-tablet | 1.7 | Line height fonts tablet and above
$ratio | 1.5 | Is multiplied by the base to produce the scale of numbers that are related

### Media Queries

Variable | Default | Description
------ | ------- | -----------
$mobile | 500px | Media query breakpoint for 500px and above
$tablet | 768px | Media query breakpoint for 500px and above
$desktop | 994px | Media query breakpoint for 994px and above
$desktop-md| 1200px | Media query breakpoint for 1200px and above
$desktop-lg | 1400px | Media query breakpoint for 1400px and above

### Wrapper container

Wrapper container.

Example:

    <div class="wrapper-container">
    	...
    </div>

#### Settings

Variable | Default | Description
------ | ------- | -----------
$wrapper-container-max-width | 1920px | Max width of the container in px
$wrapper-container-shadow | 0 0 30px -15px rgba(0, 0, 0, 1) | Box shadow of the container
$wrapper-background-color | white | Background color of the container

### Container

General container.

Example:

    <div class="container">
    	...
    </div>
	<div class="container container_sm">
    	...
    </div>
	<div class="container container_xs">
    	...
    </div>

#### Settings

Variable | Default | Description
------ | ------- | -----------
$container-max-width | 1230px | Max width of the container in px
$container-sm-max-width | 570px | Max width of the small container in px
$container-xs-max-width | 370px | Max width of the extra small container in px

### Columns

Responsive columns.

Example:

    <div class="columns">
    	<div class="col">
			...
		</div>
    </div>

#### Settings

Variable | Default | Description
------ | ------- | -----------
$gutter | 11.5px | Space between columns in mobile
$gutter-tablet |11.5px | Space between columns in tablet and above
$columns-number | 12 | Columns number for the grid
$grid-background-color | rgba(black, .1) | Visual guide of columns grid (only develop)

### Buttons

Buttons.

Example:

    <button class="btn">Button</div>
	<button class="btn">Button <svg class="btn__svg"></svg></div>

#### Settings

Variable | Default | Description
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
$btn-icon-size | 24px | Size of the icon in the button in mobile
$btn-icon-tablet-size | $btn-icon-size | Size of the icon in the button in tablet and above
$icon-btn-default-size | 34px |
$icon-btn-default-tablet-size | $icon-btn-default-size |
$icon-btn-svg-default-size | 30px |
$icon-btn-svg-default-tablet-size | $icon-btn-svg-default-size |
$icon-btn-sm-size | 24px |
$icon-btn-sm-tablet-size | $icon-btn-sm-size |
$icon-btn-svg-sm-size | 20px |
$icon-btn-svg-sm-tablet-size | $icon-btn-svg-sm-size |
$icon-btn-lg-size | 44px |
$icon-btn-lg-tablet-size | $icon-btn-lg-size |
$icon-btn-svg-lg-size | 40px |
$icon-btn-svg-lg-tablet-size | $icon-btn-svg-lg-size |
$icon-btn-border-radius | 50% |

### Inputs

Inputs.

Example:

    <div class="field">
		<label class="field__label">Label<label>
		<input>
	</div>

#### Settings

Variable | Default | Description
------ | ------- | -----------
$inputs-height | 40px |
$inputs-tablet-height | $inputs-height |
$inputs-sides-padding | 12px |
$inputs-sides-tablet-padding | $inputs-sides-padding |
$textarea-height | 120px |
$textarea-tablet-height | $textarea-height |
$textarea-padding | 12px |
$textarea-tablet-padding | $textarea-padding |
$inputs-background-color | white |
$inputs-readonly-background-color | white |
$inputs-color-text | #2b2b2b |
$inputs-border-color | #ebebeb |
$input-border-hover-color | #393939 |
$input-background-hover-color | white |
$input-border-focus-color | #2b2b2b |
$input-background-focus-color | white |
$select-arrow-color | #2b2b2b |
$inputs-border-radius | 0 |
$field-help-text-color | $inputs-color-text |
$field-error-color-text | #f00 |

### Icons

Icons.

Example:

    <span class="icon">
		<svg class="icon__svg"></svg>
	</span>

#### Settings

Variable | Default | Description
------ | ------- | -----------
$icon-default-size | 50px |
$icon-default-tablet-size | $icon-default-size |
$icon-svg-default-size | 35px |
$icon-svg-default-tablet-size | $icon-svg-default-size |
$icon-sm-size | 40px |
$icon-sm-tablet-size | $icon-sm-size |
$icon-svg-sm-size | 25px |
$icon-svg-sm-tablet-size | $icon-svg-sm-size |
$icon-lg-size | 90px |
$icon-lg-tablet-size | $icon-lg-size |
$icon-svg-lg-size | 50px |
$icon-svg-lg-tablet-size | $icon-svg-lg-size |
$icon-border-radius | 50% |

Brought to you by the lovely folks at [Axiacore](https://axiacore.com/)
