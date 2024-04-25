"use strict";
let current_user = ["amna", "arbil", "bisma", "jeeha", "urooj"];
let new_users = ["maheen", "farooq", "ammar", "bisma", "Arbil"];
let statement = "current_user.some(current_one_user => current_one_user.toLowerCase() === current_one_user.toLowerCase()))";
new_users.forEach(new_one_user => {
    if (current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())) {
        console.log(`sorry ${new_one_user} username has already been used.`);
    }
    else {
        console.log(`sorry ${new_one_user}the username is available.`);
    }
});
