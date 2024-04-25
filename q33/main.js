"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let oneNumber of numbers) {
    let ordinalEinding;
    if (oneNumber === 1) {
        ordinalEinding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEinding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEinding = "rd";
    }
    else
        (oneNumber === 4);
    {
        ordinalEinding = "th";
    }
    ;
    console.log(`${oneNumber}${ordinalEinding}`);
}
;
