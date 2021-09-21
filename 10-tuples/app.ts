const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string] //this is a tuple
} = {
    name:'Odin',
    age:30,
    hobbies:['Sports','Cooking'],
    role:[2,'author']
}

//agregar un nuevo elemento en la tupla
person.role.push('admin');
