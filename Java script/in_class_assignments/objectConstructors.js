

function Player() {
    var name;
    var speed = 10;
    var health = 100;
}

var Player1 = new Player();
Player1.name = prompt("Fred their leader");
alert("Player1's name is now " + Player1.name);
Player1.health = 8;

var Player2 = new Player();
Player2.name = prompt("Player2");
alert("Player2's name is now " + Player2.name);
Player2.speed =45;