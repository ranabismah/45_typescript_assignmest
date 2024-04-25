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
let great = make_great(magicianName);
console.log(great);
