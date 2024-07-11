/* question : "44"
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function MakeSandwich (...items: string[]){
    console.log("\n making a sandwich with the following items....\n")
    items.forEach(singleitem => console.log(singleitem))
    console.log("\n Now Enjoy Your Sandwich!")
};
MakeSandwich("chicken","bread","chees");
MakeSandwich("bread", "egg","mayo","cucumber","chicken","cheess","onion","kachup");
MakeSandwich("bread","butter");