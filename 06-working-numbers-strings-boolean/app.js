console.log("Working with numbers,string and booleans");
var number1 = 5; //5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
