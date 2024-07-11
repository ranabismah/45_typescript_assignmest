// QUESTION "14"
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guest: string[] = [" saba"," mehak"," urba"];

let message : string= "Assalam o alikum";

let invite : string= " I want you to come my home today ; and have dinner with us";




for(let i=0; i<guest.length;i++){
console.log(message + guest[i] + '\n\t' + invite )
};




export{guest};