"use strict";
let username = ["amna", "bismah", "arbil", "admin", "jeeha"];
username.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(`Hello ${oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneuser}, thank you for logging in again.`);
    }
});