var favoriteActivities;
var person = {
    name: 'Odin',
    age: 39,
    hobbies: ['Futbol', 'Reading']
};
//favoriteActivities = 'Swimming'; //ERROR
favoriteActivities = ['Sports'];
//favoriteActivities = ['Sports',1] //ERROR MIX TYPES
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
