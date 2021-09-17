var number1 = 5;
var number2 = 2.8;
function add(n1, n2) { return n1 + n2; } //puede darnos resultados inesperados
function addWithTypescript(n1, n2) { return n1 + n2; }
var result = add(number1, number2);
var resultWithTypescript = add(number1, number2);
console.log('result: ' + result);
console.log('result with typescript: ' + resultWithTypescript);
