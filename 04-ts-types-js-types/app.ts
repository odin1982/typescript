console.log('Typescript types vs Javascript types');

const number1 = 5;
const number2 = 2.8;

function add(n1: number, n2: number){
    console.log('typeof n1: ' + typeof n1);
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2;
    }else{
        throw new Error('Incorrect input!');
    } 
}

const result = add(number1,number2);
console.log(result);
