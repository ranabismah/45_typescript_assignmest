"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
;
function make_great(magician) {
    return magician.map(name => `the great ${name}`);
}
let magicianName = [
    "magician arbil",
    "magician amna",
    "magician ammar"
];
let copy_magician_Name = magicianName.slice();
let copy_great_magicians = make_great(copy_magician_Name);
//orignal
console.log("orignal array!\t");
show_magicians(magicianName);
// copied
console.log("\ncopide array!\t");
show_magicians(copy_great_magicians);
