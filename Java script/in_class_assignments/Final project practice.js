// making a user button

var button = document.getElementById('name');
var beginGame = function gameButton() {

    var player = function () {}
var playerUser = new player();

function playerInfo(currentPlayer, health, strength, speed, stealth) {
    currentPlayer.name = prompt("Who are you?"),
    currentPlayer.health = 10
    currentPlayer.strength = "Strong"
    currentPlayer.speed = 50;
    currentPlayer.stealth = function () {
        if (health <= 5) {
           stealth = "Good";
        } else { stealth = "Poor"; 
        }
    }
}

playerInfo(playerUser,10,"Strong", 50 );

if (!playerUser.name) {
    alert ("please enter a name")
    window.location.reload();
} else {
    
    alert("Okay, "+ playerUser.name +" You begin with: "+ playerUser.health + " health.    "
+playerUser.strength +" strength.   " + playerUser.speed + " Speed.     and " +playerUser.stealth +" Stealth"
 )
console.log (playerUser.name);
console.log (playerUser.health);
console.log (playerUser.strength);
console.log (playerUser.speed);
console.log (playerUser.stealth);


    alert ("In a post apocaliptic world you're our only hope! "+ playerUser.name + " can we trust you to protect and save us? Pres OK if you accept the challenge");

    var beginingSenarios = ["Starting on earth you need to find a weapon, but where do you go?",
    "Mars is a desolate planet, who knows how you ended up here, but you need to find a way to defend yourself. " + playerUser.name + " Lets go find a weapon."
    ]
       function randomNumber (range){
        return Math.round(Math.random()*range);
    }
    alert(beginingSenarios [randomNumber (beginingSenarios.length -1)]);
}
// make as objects: Enimies 3, weapons
var enimy = function EnimyMaker (params) {
    var damageGiven = 2;
    var health = 2;
    var speed = 25;
}
    var enimy1 = new enimy();
    var enimy2 = new enimy();
    var enimy3 = new enimy();

 function updateEnimy (enimyNumber, damageGiven, health, speed) {
    updateEnimy.enimyNumber = "Goul";
    updateEnimy.damageGiven = 2;
    updateEnimy.health = 10;
    updateEnimy.speed = 25;

    }

alert("As you are looking for a weapon something approaches");
       var RandomNumber1 = Math.round(Math.random()*2);
       console.log(RandomNumber1);
       if (RandomNumber1>1) {
           updateEnimy(enimy1,4,10,75);
           console.log (updateEnimy.enimyNumber);
           console.log (updateEnimy.damageGiven);
           console.log (updateEnimy.health);
           console.log (updateEnimy.speed);

       } else {
           alert("You find a Pistol and take out the goul that was chasing you down.")
       }
   

}   
button.addEventListener('click', beginGame);

// learn how to add a list of options for adding}
