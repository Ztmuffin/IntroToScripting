

var beginingSenarios =["It is the zombie apocalypse! You are desperate. You break into a store and begin looting",
"You wake up alone in a field with nothing but the clothes on your back, you start making your way to the edge of the clearing.",
"You wake up in the pasenger seat of a crashed car, your memory is foggy, there is movement outside and you realize they are all zombies"]

function numberRandom1 (range){
    return Math.round (Math.random() * range );
}

alert(beginingSenarios [numberRandom1 (beginingSenarios.length -1)]);
     
var weaponList = ["can of beans", "shovel", "whoopie coushin", "severed arm", "pistol", "pencil"];
    var weapon  = weaponList [numberRandom1 (weaponList.length -1)];
     alert("Seeing how it is the Zombie apocalypse you need something to attack with. Looking arround you find a " + weapon + "!");
var randomNumber = Math.round(Math.random()*3);
    console.log (randomNumber);

    alert("A zombie is approaching you!");
    doYouattack();

function doYouattack (){
var r = confirm("Do you attack the Zombie with your " + weapon +"?");
    if (r == true) {
        alert("You slash at the zombie with your "+ weapon +"!");
        if (randomNumber === 1){
        alert("The zombie bites you, you lose!");
        restartGame();
    }
        else if (randomNumber === 3){
            alert("You miss! Though the zombie was just looking for brains. Your head looks more like a pumpkin and he ignores you.");
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
}

function Level2() {

while (randomNumber>1) {
    console.log(randomNumber);
     alert("You're on the move again, yet another zombie approaches you");
        if (randomNumber === 3){
            alert("Even That zombie was just looking for brains. Your head still looked like a pumpkin and he walks past you. GET THAT THING CHECKED OUT");
    }   else if(randomNumber === 2){
        alert("That one you kill with your "+ weapon + " You Win!");
    } 
    randomNumber--
}
 restartGame();
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
