function add(n1:number,n2:number): number{
    return n1 + n2;
}


//let combineValues;
//Its not a good idea use this type of functions
//combineValues = add;
//console.log(combineValues(8,8));


let combineValues:(a:number,b:number) => number;

combineValues = add;

console.log(combineValues(8,8));


