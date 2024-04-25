let guest = [" saba"," mehak"," urba"];

let message = "Assalam o alikum";

let invite = " I want you to come my home today ; and have dinner with us";

/*for(var i=0; i<guest.length;i++){
console.log(message + guest[i] + '\n\t' + invite )
};*/


let new_guest = " arbil";
let problem = "urba is not comming!";
 /*console.log("\n\t"+problem +"\n\t");
guest[2]= new_guest;
for(var i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };*/

    
guest.unshift(" amna ", " jeeha "," urooj");
 let change= "Gys I changed my plan or I arrange a big dinner thats why i invided more friends";
  /* console.log("\n\t" + change + "\n\t")
for(var i=0; i<guest.length;i++){
    console.log(message + guest[i] + '\n\t' + invite )
    };*/
console.log(' "sorry dears! today dinner is cancel cause some specific reason". \n\t today just I invited only two persons')
while(guest.length>2){
 let remove_guest=guest.pop();
 console.log(`sorry dear.${remove_guest} you are not invited `)
};

for(var i=0; i<guest.length; i++){
    console.log("dear"+guest[i]+"you are still invited please come on time \n\t thank you")
};

guest.splice(0,2);
console.log(guest);
