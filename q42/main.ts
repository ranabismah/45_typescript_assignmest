/*question : "42"
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
    };
    
    function make_great(magician: string[]){
       return magician.map(name => `the great ${name}`);
    }


    let magicianName: string[] =[
        "magician arbil",
        "magician amna",
        "magician ammar"
    ];

   let great: string[]= make_great(magicianName);
   console.log(great);