/*question : "24"
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

let book : string= "book";
let upperCase: string= "BOOK";
let five: number=5;
let ten: number=10;
//Tests for equality and inequality
console.log('\nis book is equal to "book"?');
console.log(book =="book");

console.log('\nis book is not equal to "book"?');
console.log(book!="book");

//using the lower case function
console.log('\nIs book is equals to "BOOK" after coverting in lowerCase?');
console.log(upperCase.toLowerCase() == "book");

console.log('\nIs book is is not equals to "BOOK" after coverting in lowerCase?');
console.log(upperCase.toLowerCase() != "book");

//Numerical tests involving equality and inequality,
console.log('\nIs five is equals to "5"?');
console.log(five==5);
console.log('\nIs five is not equals to "5"?');
console.log(five!=5);

// greater then or equal to / less then or equal to..
console.log('\nIs five is greater then or equals to "10"?');
console.log(five>=10);
console.log('\nIs five is less then or equals to "10"?');
console.log(five<=10);

//Tests using "and" and "or" operators
// and &&
 console.log("\nIs ten is not equals to five and ten is greater then five?");
 console.log(ten!=five&& ten>five);
 console.log("\nIs ten is equals to five and ten is less then five?");
 console.log(ten==five&& ten<five);
// or ||
console.log("\nIs ten is not equals to five or ten is greater then five?");
 console.log(ten!=five&& ten>five);
 console.log("\nIs ten is  equals to five or ten is less then five?");
 console.log(ten==five||ten<five);

// • Test whether an item is in a array

let students = ["talha","ammar","bismah"];
console.log("\nIs talha includes in studens?");
console.log(students.includes("talha"));

//• Test whether an item is not in a array
console.log("\nIs talha is not  includes in studens?");
console.log(!students.includes("talha"));








