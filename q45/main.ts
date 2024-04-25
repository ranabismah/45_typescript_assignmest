function create_car(menufacturer: string, model: string, ...option: string[]){
    let car ={
        menufacturer: menufacturer,
        model:model
    };
    option.forEach(option=>{
        let [key, value] = option.split(":");
       (`car[key.trim() ] = value.trim()`);
    });
    return car;
}
let mycar = create_car("toyota","carola");
console.log(mycar);

