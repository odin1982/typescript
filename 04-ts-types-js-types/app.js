console.log('Typescript types vs Javascript types');
var number1 = 5;
var number2 = 2.8;
function add(n1, n2) {
    console.log('typeof n1: ' + typeof n1);
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        throw new Error('Incorrect input!');
    }
}
var result = add(number1, number2);
console.log(result);
