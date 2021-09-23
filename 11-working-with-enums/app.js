console.log('Working with enums');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 0] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 1] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 2] = "AUTHOR";
})(Role2 || (Role2 = {}));
;
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "ADMIN";
    Role3["READ_ONLY"] = "READ_ONLY";
    Role3["AUTHOR"] = "AUTHOR";
})(Role3 || (Role3 = {}));
;
var Role4;
(function (Role4) {
    Role4["ADMIN"] = "ADMIN";
    Role4[Role4["READ_ONLY"] = 1] = "READ_ONLY";
    Role4["AUTHOR"] = "AUTHOR";
})(Role4 || (Role4 = {}));
; //Mixing types is valid
var person = {
    name: 'Odin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person);
