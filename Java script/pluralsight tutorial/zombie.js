

alert("It is the zombie apocalypse! While you are looting a store a zombie bursts through the door!");
    var weapon = prompt ("you reach for your weapon. What do you have to use?")
    
var randomNumber = Math.round(Math.random()*3);


alert ("You attack the Zombie with your" + " " + weapon);

if (randomNumber === 1){
    alert("The zombie bites you, you lose!");
} else if(randomNumber === 2){
    alert("You kill the zombie with your "+ weapon + " You Win!");
}
    else if (randomNumber === 3){
        alert("The zombie was just looking for brains. Your head looks more like a pumpkin and he ignores you.");
}

console.log (randomNumber);

function restartGame()
{
    var r=confirm("Do you want play again?");
    if (r)
    {
        //write redirection code
        window.location.reload();
    }
    else
   {
        //do nothing
    }
}
restartGame();