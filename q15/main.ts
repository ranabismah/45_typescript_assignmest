/*question: "15"
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.:"15";*/


let guest : string[]= [" saba"," mehak"," urba"];

let message: String = "Assalam o alikum";

let invite: string = " I want you to come my home today ; and have dinner with us";




for(var i=0; i<guest.length;i++){
console.log(message + guest[i] + '\n\t' + invite )
};
let new_guest : string= " arbil";
let problem: string = "urba is not comming!";
 console.log("\n\t"+problem +"\n\t");
guest[2]= new_guest;
for(let i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };
