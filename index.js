const cs = require('color-space')
const hsl = cs.hsl

function FC(a, b) {
  if (!b) this.color = a
  this.range = [a, b]
  this.c0 = 260
  this.c1 = 280
  this.x0 = this.c0 / (360 - this.c1 + this.c0)
}

FC.prototype.convert = function(x) {
  let fc = this

  x = this.x = (x - fc.range[0]) / (fc.range[1] - fc.range[0])

  this.color =
    x < 0
      ? [0, 0, 66]
      : x > 1
      ? [0, 0, 20]
      : [
          x > this.x0
            ? this.c0 + 360 - (this.c0 * x) / this.x0
            : (this.c0 * (this.x0 - x)) / this.x0,
          100,
          50
        ]
  return this
}

FC.prototype.toString = function(enc) {
  if (!enc) enc = 'rgb'
  enc = enc.toLowerCase()

  switch (enc) {
    case 'rgba':
      return `rgba(${this.value().join(',')},1)`

    case 'hsl':
      let _n = 0
      return `hsl(${this.value('hsl')
        .map(d => (_n++ > 0 ? d + '%' : d))
        .join(',')})`
  }

  return (
    '#' +
    this.value()
      .map(d => ('000' + Math.floor(d).toString(16)).slice(-2))
      .join('')
  )
}

FC.prototype.fg = function() {
  let x = this.x
  return new FC(x < 0 || (x > 0.15 && x < 0.8) ? [0, 0, 20] : [0, 0, 100])
}

FC.prototype.value = function(space) {
  if (!space) space = 'rgb'
  return cs['hsl'][space](this.color).map(x => parseFloat(x.toFixed(2)))
}

module.exports = {
  celsius(t) {
    return new FC(-80, 100).convert(t)
  },
  fahrenheit(t) {
    return new FC(-112, 212).convert(t)
  },
  percentage(p) {
    return new FC(0, 1).convert(p)
  },
  range(a, b) {
    return new FC(a, b)
  }
}
