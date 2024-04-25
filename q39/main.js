"use strict";
function city_country(city, country) {
    return `${city} , ${country}`;
}
;
// calling retun function with 2 different ways:
// 1st METHOD
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));
//2nd METHOD
let country2 = city_country("Istanbul", "Turkey");
console.log(country2);
