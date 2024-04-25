"use strict";
function makeShirt(size = "large", printmessage = "I love typescript") {
    console.log(`make a ${size} size shirt with the ${printmessage} prints on it`);
}
makeShirt();
makeShirt("medium");
// calling function again with the different value 
makeShirt("small", "we should to learn typescript!");
