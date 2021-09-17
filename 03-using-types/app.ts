const number1 = 5;
const number2 = 2.8;

function add(n1,n2){ return n1 + n2; }//puede darnos resultados inesperados
function addWithTypescript(n1: number,n2:number){ return n1 +n2; }

const result = add(number1,number2);
const resultWithTypescript = add(number1,number2);
//const result2 = addWithTypescript('5',2);//this is an Typescript advantage

console.log('result: ' + result);
console.log('result with typescript: ' + resultWithTypescript);


