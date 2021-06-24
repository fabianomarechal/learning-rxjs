const EventEmitter = require('events');


class Calculadora extends EventEmitter {}

const calc = new Calculadora();

calc.addListener('result', (result) => console.log(result));

calc.addListener('add', (a, b) => {
    calc.emit('result', a+b);
});

calc.emit('add', 1, 2);
