/* question : "37"
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function  makeShirt(size :string= "large", printmessage:string ="I love typescript"){
    console.log(`make a ${size} size shirt with the ${printmessage} prints on it`)
 }
makeShirt();

makeShirt("medium");


// calling function again with the different value 

makeShirt("small", "we should to learn typescript!")