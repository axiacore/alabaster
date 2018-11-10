# geoffrey

## A lightweight and flexible tool set to build awesome web platform.

Geoffrey is a sass tool sets develop to build awesome web site faster and easy. It's build especially on how we develop the frontend in Axiacore.

## What you would find

We use a concept call modular scale to keep the vertical rhythm and consistency in our design. We develop some mixin so we can layout the design easy and faster.

You are going to find some helpers so you can write smooth Sass.

## Installing using yarn

```bash
yarn add geoffrey
```

## Usage

Call the file `geoffrey.sass` in the file that compile your Sass and be sure you call it before the Sass's files you use to build your web.

```sass
@import "route-to-file/geoffrey.sass"
@import "header"
```

### Variables

Name | Default | Description
------ | ---- | ------- | -----------
$base-font-size | 100 | Font size for mobile in %
$base-font-size-tablet | 112.5 | Font size for tablet and above in %
$line-height | 1.45 | Line height fonts for mobile
$line-height-tablet | 1.7 | Line height fonts tablet and above
$ratio | 1.5 | Is multiplied by the base to produce the scale of numbers that are related
$mobile | 500px | Media query breakpoint for 500px and above
$tablet | 768px | Media query breakpoint for 768px and above
$desktop | 994px | Media query breakpoint for 994px and above
$widescreen | 1200px | Media query breakpoint for 1200px and above
$fullhd | 1400px | Media query breakpoint for 1400px and above
$column-gap* | 11.5px | Gutter between the columns of a grid.

*This variable only works if [Bulma](https://bulma.io/) is used it to build the grids

You can change the varibles default value, by calling them before you call the geoffrey.sass file and add !default to the end of the line.

```sass
$ratio: 1.333 !default

@import "route-to-file/geoffrey.sass"
@import "header"
```

Brought to you by the lovely folks at [Axiacore](https://axiacore.com/)
