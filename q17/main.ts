/*question :   "17"
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guest : string[]= [" saba"," mehak"," urba"];

let message: string = "Assalam o alikum";

let invite : string= " I want you to come my home today ; and have dinner with us";

/*for(var i=0; i<guest.length;i++){
console.log(message + guest[i] + '\n\t' + invite )
};*/


let new_guest : string= " arbil";
let problem: string = "urba is not comming!";
 /*console.log("\n\t"+problem +"\n\t");
guest[2]= new_guest;
for(var i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };*/

    
guest.unshift(" amna ", " jeeha "," urooj");
 let change: string= "Gys I changed my plan or I arrange a big dinner thats why i invided more friends";
  /* console.log("\n\t" + change + "\n\t")
for(var i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };*/
console.log(' "sorry dears! today dinner is cancel cause some specific reason". \n\t today just I invited only two persons')
while(guest.length>2){
 let remove_guest=guest.pop();
 console.log(`sorry dear.${remove_guest} you are not invited `)
};

for(let i=0; i<guest.length; i++){
    console.log("dear"+guest[i]+"you are still invited please come on time \n\t thank you")
};

guest.splice(0,2);
console.log(guest);
