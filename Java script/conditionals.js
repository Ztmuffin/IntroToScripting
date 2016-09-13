// boolean var
var levelLocked = true;

var attempts = 3;

//declaring a function
function PasswordPrompt() {
        // string var
    var myPassword = prompt("Enter Password");
    // this tests if myPassword is a certain string
    if (myPassword == "cowpie"){
        // if true then this changes the boolean to false
        levelLocked = false;
    }
    else {
        // decreases attempts
        if (attempts > 0) {
             attempts --;
        // recall of the function if false
        PasswordPrompt();
        }
    }
}
PasswordPrompt();

// then we have the page check to see what the status of the bool is  aka if levelLocked is true or false
if (levelLocked) {
    alert("Sorry this level is locked.");
}
    else {
        alert("The level is unlocked");
    }