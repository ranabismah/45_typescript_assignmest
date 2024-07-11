/* question : "16"
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let guest: string[] = [" saba"," mehak"," urba"];

let message : string = "Assalam o alikum";

let invite: string = " I want you to come my home today ; and have dinner with us";

for(let i=0; i<guest.length;i++){
console.log(message + guest[i] + '\n\t' + invite )
};


let new_guest : string= " arbil";

let problem: string = "urba is not comming!";
 console.log("\n\t"+problem +"\n\t");
guest[2]= new_guest;
for(var i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };

    
guest.unshift(" amna", " jeeha"," urooj");
 let change: string= "Gys I chaned my plan or I arrange a big dinner thats why i invided more friends";
   console.log("\n\t" + change + "\n\t")
for(let i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };