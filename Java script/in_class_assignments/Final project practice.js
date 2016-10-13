// making a user button

var button = document.getElementById('name');
var beginGame = function gameButton() {
    
updatePlayer (playerUser,10,"Strong", 60 );
level1();
level2();
}
button.addEventListener('click', beginGame);
    var player = function () {
        var name;
        var health = 10;
        var strength = "Strong";
        var speed = 50;
        this.stealth = "good";
        this.updateStealth = function (stealth) {
            if (health <= 5) {
            this.stealth = "Poor";
            } else { this.stealth = "Good"; 
            }
        }
    }
var playerUser = new player();

function updatePlayer (currentPlayer, healthUpdate, strengthUpdate, speedUpdate) {
    currentPlayer.name = prompt("Captain, What is your name?"),
    currentPlayer.health = healthUpdate;
    currentPlayer.strength = strengthUpdate;
    currentPlayer.speed = speedUpdate;
    }

function level1() {
    
if (!playerUser.name) {
    alert ("please enter a name")
    window.location.reload();
} else {
    
    alert("Okay, "+ playerUser.name +" You begin with: "+ playerUser.health + " health.    "
+playerUser.strength +" strength.   " + playerUser.speed + " Speed.     and " +playerUser.stealth +" Stealth"
 )
     alert ("In a post apocaliptic world you're our only hope! "+ playerUser.name + " can we trust you to protect and save us? Pres OK if you accept the challenge");

    var beginingSenarios = ["Starting on earth you need to find a weapon, but where do you go?",
    "Mars is a desolate planet, who knows how you ended up here, but you need to find a way to defend yourself. " + playerUser.name + " Lets go find a weapon."
    ]
       function randomNumber (range){
        return Math.round(Math.random()*range);
    }
    alert(beginingSenarios [randomNumber (beginingSenarios.length -1)]);
    }

    alert("As you are looking for a weapon a Goblin approaches");
       var RandomNumber1 = Math.round(Math.random()*2);
       console.log(RandomNumber1);
       if (RandomNumber1>1) {
           updateEnimy(enimy1,4,10,75);
           updatePlayer(playerUser,6,"Fair", 50);
           alert("You took some damage from the Goblin! Though you killed them with a fork you found, they attacked you first.")
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.")
        } else {
           alert(playerUser.name +" you find a sharpened stake and luckily take out the Goblin that was chasing you down.")
           updateEnimy(enimy1,0,0,0)
           alert("Okay, "+ playerUser.name +" You're down to: "+ playerUser.health + " health.    "
            +playerUser.strength +" strength.   " + playerUser.speed + " Speed.")
       }
}
// make as objects: Enimies 3, weapons

var enimy = function () {
    var damageGiven = 2;
    var health = 2;
    var speed = 25;
}
    var enimy1 = new enimy();
    var enimy2 = new enimy();
    var enimy3 = new enimy();

 function updateEnimy (currentEnimy, damageUpdate, healthUpdate, speedUpdate) {
    currentEnimy.name = "Goblin"
    currentEnimy.damageGiven = damageUpdate;
    currentEnimy.health = healthUpdate;
    currentEnimy.speed = speedUpdate;

    }

while (playerUser.health < 0) { alert("you loose!");
    restartGame();
}
function level2 () {
   alert("you've found a weapon now, a rifle.  Another Goblin approaches, lets see if you know how to use that rifle");

}

function restartGame () {
    var q = confirm("Do you want to play again?");
    if (q== true) {
        window.location.reload();
    } else {
        // Do nothing
    }
}
// learn how to add a list of options for adding}
/*
           console.log (enimy1.name);
           console.log (enimy1.damageGiven);
           console.log (enimy1.health);
           console.log (enimy1.speed);


console.log (playerUser.name);
console.log (playerUser.health);
console.log (playerUser.strength);
console.log (playerUser.speed);
console.log (playerUser.stealth);
           */