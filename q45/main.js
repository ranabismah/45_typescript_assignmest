"use strict";
function create_car(menufacturer, model, ...option) {
    let car = {
        menufacturer: menufacturer,
        model: model
    };
    option.forEach(option => {
        let [key, value] = option.split(":");
        (`car[key.trim() ] = value.trim()`);
    });
    return car;
}
let mycar = create_car("toyota", "carola");
console.log(mycar);
console.log(" \n MODIFY A  CAR!");
let newCar = create_car("Toyota", "carolla", "colour: blue");
console.log(newCar);
