console.log('Working with enums');

enum Role{ADMIN,READ_ONLY,AUTHOR};
enum Role2{ADMIN=0,READ_ONLY=1,AUTHOR=2};
enum Role3{ADMIN='ADMIN',READ_ONLY='READ_ONLY',AUTHOR='AUTHOR'};
enum Role4{ADMIN='ADMIN',READ_ONLY=1,AUTHOR='AUTHOR'};//Mixing types is valid

const person ={
    name:       'Odin',
    age:        30,
    hobbies:    ['Sports','Cooking'],
    role :      Role.ADMIN
}

console.log(person);

