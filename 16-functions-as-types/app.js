function add(n1, n2) {
    return n1 + n2;
}
//let combineValues;
//Its not a good idea use this type of functions
//combineValues = add;
//console.log(combineValues(8,8));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
