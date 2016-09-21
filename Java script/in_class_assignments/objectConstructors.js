

var Player = function () {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100;

    this.reArm = function (ammo) {
        this.ammoCount += ammo;
    }
}

var Player1 = new Player();
var Player2 = new Player();



function UpdatePlayer(currentPlayer, healthUpdate, ammo) {
    currentPlayer.name = prompt("Who is your leader?");
    alert("Your leader's name is now " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "Moderate";
    currentPlayer.reArm (ammo);
    alert (currentPlayer.name + " has "+ currentPlayer.ammoCount + " in their arsonal.");
}
UpdatePlayer(Player1, 20, 1);
UpdatePlayer(Player2, 60, 1000);
