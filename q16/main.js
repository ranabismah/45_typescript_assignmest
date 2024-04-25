"use strict";
let guest = [" saba", " mehak", " urba"];
let message = "Assalam o alikum";
let invite = " I want you to come my home today ; and have dinner with us";
for (var i = 0; i < guest.length; i++) {
    console.log(message + guest[i] + '\n\t' + invite);
}
;
let new_guest = " arbil";
let problem = "urba is not comming!";
console.log("\n\t" + problem + "\n\t");
guest[2] = new_guest;
for (var i = 0; i < guest.length; i++) {
    console.log(message + guest[i] + '\n\t' + invite);
}
;
guest.unshift(" amna", " jeeha", " urooj");
let change = "Gys I chaned my plan or I arrange a big dinner thats why i invided more friends";
console.log("\n\t" + change + "\n\t");
for (var i = 0; i < guest.length; i++) {
    console.log(message + guest[i] + '\n\t' + invite);
}
;
