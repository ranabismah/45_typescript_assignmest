"use strict";
let places = [
    "turkey", "saudia arab", "dubai", "umaan", "canada"
];
console.log("\n" + "orignal order:");
console.log(places);
console.log("\n" + "alphabatical order:");
console.log([...places].sort());
console.log("\n" + " orignal order after sorting:");
console.log(places);
console.log("\n" + "reverse alphabatical order:");
console.log([...places].sort().reverse());
console.log("\n" + " orignal order after sorting or reverse:");
console.log(places);
console.log("\n" + "reverse order:");
places = places.reverse();
console.log(places);
console.log("\n" + "rverse to its orignal order:");
places = places.reverse();
console.log(places);
console.log("\n" + "sort array again in alphabatical order:");
console.log([...places].sort());
console.log("\n" + " change sort in reverse alphabatical order:");
console.log([...places].sort().reverse());
