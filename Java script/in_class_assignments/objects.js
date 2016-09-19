//Objects Lesson
var Robot = {
    fuel: 100,
    weapon: "Laser",
    speed: 10,
    strength: 50,
    armor: "Light",

    AddFuel: function (tank) {
        fuel += tank;
    },

    UpgradeArmor: function (change) {
        this.armor = change;
    },
    ChangeWeapon: function (change) {
        this.weapon = change;
    }
}
Robot.speed += parseInt(prompt("Increase Robot speed?"));
alert("Our Robot now has a speed of " + Robot.speed);
Robot.UpgradeArmor(prompt("What should we upgrade the armor to?"));
alert("The Robot now has " + Robot.armor + " armor.");