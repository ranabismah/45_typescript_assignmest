/* question : "43"
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

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
    let copy_magician_Name: string[] = magicianName.slice();

    let copy_great_magicians =make_great(copy_magician_Name);
    
    //orignal
    console.log("orignal array!\t");
    show_magicians(magicianName);
    // copied
    console.log("\ncopide array!\t");
    show_magicians(copy_great_magicians);