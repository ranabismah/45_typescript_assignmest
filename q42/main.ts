function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
    };
    
    function make_great(magician: string[]){
       return magician.map(name => `the great ${name}`);
    }


    let magicianName =[
        "magician arbil",
        "magician amna",
        "magician ammar"
    ];

   let great= make_great(magicianName);
   console.log(great);