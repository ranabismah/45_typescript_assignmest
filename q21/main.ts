/* question : "21"
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items*/

let person: {
    name: string;
    age: number;
    fav_subjects: string[];
}
 person = {
    name:"bismah",
    age:17,
    fav_subjects:["maths","english","computer"],
    
}

console.log(person);
console.log(person.age);
console.log(person.fav_subjects);
console.log(person.fav_subjects[0]);
