console.log("Working with numbers,string and booleans");
const number1 = 5; //5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';


function add(n1:number, n2: number, showResult: boolean,phrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return n1 + n2;
    }
}

const result = add(number1,number2,printResult,resultPhrase);
console.log(result);
