const fc = require('..')
const ck = require('chalk')
const log = console.log

log(ck.red('celsius'))
for (let i = -100; i < 120; i++) {
  let s = fc.celsius(i)
  log(
    ck.hex(s.toString())('███████'),
    ck.hex(s.fg().toString())('███████'),
    s.toString(),
    i
  )
}

log(ck.red('range 0~100'))
let rfc = fc.range(0, 100)
for (let i = 0; i < 100; i++) {
  let s = rfc.convert(i).toString()
  log(ck.hex(s)('███████'), s, i)
}

log(ck.red('percentage'))
for (let i = -0.2; i < 1.2; i += 0.01) {
  let s = fc.percentage(i)
  log(
    ck.hex(s.toString())('███████'),
    ck.hex(s.fg().toString())('███████'),
    s.toString(),
    s.toString('hsl'),
    s.toString('rgba'),
    i.toFixed(3),

    'hsl',
    s.value(),
    'rgb',
    s.value('rgb'),
    'yuv',
    s.value('yuv')
  )
}
