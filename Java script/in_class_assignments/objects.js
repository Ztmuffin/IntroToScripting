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
        armor = change;
    },
    ChangeWeapon: function (change) {
        weapon = change;
    }
}
Robot.speed += parseInt(prompt("Increase Robot speed?"));
alert("Our Robot now has a speed of " + Robot.speed);