
alert("You will be asked your favorite color. Are you sure you wish to continue?");

var favoriteColor = prompt("What is your favorite color?");
if (favoriteColor != null) {
    alert("Well then, " + favoriteColor + " is my favorite color too!");
}
else if (favoriteColor === null){                 //having a hard time getting this to alert if the field is left blank
    alert("You must enter a color!");
}
else  {
        alert("You didn't enter anything!");
}