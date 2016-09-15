

alert("It is the zombie apocalypse! While you are looting a store a zombie bursts through the door!");
    var weapon = prompt ("you reach for your weapon. What do you have to use?")
    
var randomNumber = Math.round(Math.random()*3);

    console.log (randomNumber);

var r = confirm("Do you attack the Zombie with your " + weapon +"?");
    if (r == true) {
        alert("You slash at the zombie with your "+ weapon +"!");
        if (randomNumber === 1){
        alert("The zombie bites you, you lose!");
        restartGame();
    }
        else if (randomNumber === 3){
            alert("The zombie was just looking for brains. Your head looks more like a pumpkin and he ignores you.");
            Level2();
    }   else if(randomNumber === 2){
        alert("You kill the zombie with your "+ weapon + " You Win!");
        Level2();
    } 
    }
    else {
        alert("While your just standing there just dumb as stupid, the Zombie starts eating you, you lose");
        restartGame();
}

function Level2() {

while (randomNumber>1) {
    console.log(randomNumber);
     alert("You're on the move again, yet another zombie begins to chase you");
        if (randomNumber === 3){
            alert("Even That zombie was just looking for brains. Your head seriously looks like a pumpkin and he walks past you. GET THAT THING CHECKED OUT");
    }   else if(randomNumber === 2){
        alert("That one you kill with your "+ weapon + " You Win!");
    } 
    randomNumber--
}
}
    

function restartGame()
{
    var q=confirm("Do you want play again?");
    if (q == true)
    {
        //write redirection code
        window.location.reload();
    }
    else
   {
        //do nothing
    }
}