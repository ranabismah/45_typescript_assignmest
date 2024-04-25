"use strict";
function MakeSandwich(...items) {
    console.log("\n making a sandwich with the following items....\n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\n Now Enjoy Your Sandwich!");
}
;
MakeSandwich("chicken", "bread", "chees");
MakeSandwich("bread", "egg", "mayo", "cucumber", "chicken", "cheess", "onion", "kachup");
MakeSandwich("bread", "butter");
