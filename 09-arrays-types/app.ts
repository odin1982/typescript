let favoriteActivities: string[];

const person = {
    name:'Odin',
    age:39,
    hobbies: ['Futbol','Reading']
}

//favoriteActivities = 'Swimming'; //ERROR
favoriteActivities = ['Sports']
//favoriteActivities = ['Sports',1] //ERROR MIX TYPES
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
}
