/* Alert begin scenario

*/
var outcome;
var randomNumber = Math.round(Math.random()*3);
    console.log (randomNumber);

window.alert ("If you have not realized this already, you have now found yourself in the Zombie apocalypse. "+
" It is either win or lose, you are alive now but will you stay that way? ");

var beginingSenarios =["Since it is the zombie apocalypse! You are desperate. You break into a store and begin looting",
    "You wake up alone in a field with nothing but the clothes on your back, you start making your way to the edge of the clearing.",
    "You wake up in the passenger seat of a crashed car, your memory is foggy, there is movement outside and you realize they are all zombies"
    ]

    function numberRandom1 (range){
        return Math.round (Math.random() * range );
}

window.alert(beginingSenarios [numberRandom1 (beginingSenarios.length -1)]);

var player1 = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: window.prompt ("First, What is your name?"),
    characterClass: prompt("Before the zombies came, you were one of three things. Were you a Solder, Civilian, or Hunter?").toLowerCase()
};

if(!player1.name) {
    window.alert("You didn't enter any name. You're now going to be called Garry Paulmer");
    player1.name = "Garry Paulmer";
}
if (player1.characterClass === "solder") {
    window.alert("Pleasure to meet you solder. Best of luck.");
}
if (player1.characterClass === "civilian") {
     window.alert("Pleasure to meet you "+ player1.name +". Best of luck.");
}
if (player1.characterClass === "hunter") {
     window.alert("Pleasure to meet you "+ player1.name +". Best of luck. Hope you can hunt zombies");
}



  window.alert("A zombie is approaching you!");
    doYouattack();

function doYouattack (){
var r = confirm("Do you attack the Zombie?");
    if (r == true) {
        alert("You slash at the zombie with your hands");
        if (randomNumber === 1){
        alert("The zombie bites you, you lose!");
        restartGame();
    }
        else if (randomNumber === 3){
            alert("You miss! Though the zombie was just looking for brains. Your head looks more like a pumpkin and he ignores you.");
            Level2();
    }   else if(randomNumber === 2){
        alert("You kill the zombie with your hands You Win!");
        Level2();
    } 
    }
    else {
        alert("While you're just standing there looking just plain dumb and stupid, the Zombie starts eating you, you lose");
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
        alert("That one you kill with your You Win!");
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

