// making a user button

var button = document.getElementById('name');
var beginGame = function gameButton() {
    }
button.addEventListener('click', beginGame);

    var player = function () {
        var health = 10,
        var strength = "high",
        var speed = 50,
    
        this.stealth = function (){
        if (health >= 6) {
        stealth = "high";
        }else {stealth = "low";
        }
    }
}
var playerUser = new player();

function playerInfo(currentPlayer, health, strength, speed, stealth) {
    currentPlayer.name = prompt("Who are you?"),
    currentPlayer.health = 10
}
playerInfo(playerUser);


console.log (playerUser.name);
console.log (playerUser.health);
console.log (playerUser.strength);
console.log (playerUser.speed);
console.log (playerUser.stealth);

// remember how to add an object maker.
// make as objects Player, Enimies 3, weapons

// add variables like stats to an object

var enimies3 

enimies.speed

alert(playerUser.speed);

prompt ("what weapon do you use?");
// learn how to add a list of options for adding weapons