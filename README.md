> Copyed from [wikipedia](https://en.wikipedia.org/wiki/False_color)

False color (or false colour) refers to a group of color rendering methods used to display images in color which were recorded in the visible or non-visible parts of the electromagnetic spectrum. A false-color image is an image that depicts an object in colors that differ from those a photograph (a true-color image) would show.

## What can this package do

`false-color` generally converts a number to a color, and the color represents the value. This is useful when you want to color a graph when doing data visualization.

## Install

```
npm i false-color --save
```

## Usage

```js
const fc = require('false-color')

console.log(fc.celsius(37).toString('hex'))
// '#ffa500'

console.log(fc.celsius(37).toString('rgba'))
// 'rgba(255,165.75,0,1)'

console.log(
  fc
    .range(0, 100)
    .convert(5)
    .toString('hex')
)
// '#0c00ff'
```

## API

### fc.range(a, b)

Returns an empty `FC` object with range `[a, b]`

### fc.convert(value)

Returns an `FC` object with color converted from `value`

### fc.toString(encode)

Returns a encoded string.

| `encode` | Example                  |
| -------- | ------------------------ |
| `hex`    | `'#0c00ff'`              |
| `rgb`    | `'#0c00ff'`              |
| `rgba`   | `'rgba(255,165.75,0,1)'` |
| `hsl`    | `'hsl(256.6,100%,50%)'`  |

### fc.value(space)

Converts the color to `space` and return as an array. This function is powered by [color-space](https://github.com/colorjs/color-space)

### fc.fg(value)

Returns an `FC` object that contains a recommended foreground color. This is useful when you want to print some text on the converted color.

```
bgColor = fc.celsius(77)
textColor = bgColor.fg().toString()
```

### fc.celsius(value)

Short cut for `fc.range(-80, 100).convert(value)`

### fc.fahrenheit(value)

Short cut for `fc.range(-112, 212).convert(value)`

### fc.percentage(value)

Short cut for `fc.range(0, 1).convert(value)`
