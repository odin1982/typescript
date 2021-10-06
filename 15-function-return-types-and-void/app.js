function add(n1, n2) {
    return n1 + n2;
}
function addString(n1, n2) {
    return n1.toString() + n2.toString();
}
//COMPILE ERROR
// function add(n1:number,n2:number): string{
//     return n1 + n2;
// }
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
