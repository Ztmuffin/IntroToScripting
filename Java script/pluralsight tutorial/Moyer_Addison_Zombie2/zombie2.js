/* Alert begin scenario

*/
var outcome;

window.alert ("If you have not realized this already, you have now found yourself in the Zombie apocalypse."+
"It is either win or lose, you are alive now but will you stay that way? ");

var beginingSenarios =["Since it is the zombie apocalypse! You are desperate. You break into a store and begin looting",
    "You wake up alone in a field with nothing but the clothes on your back, you start making your way to the edge of the clearing.",
    "You wake up in the passenger seat of a crashed car, your memory is foggy, there is movement outside and you realize they are all zombies"]

    function numberRandom1 (range){
        return Math.round (Math.random() * range );
}

alert(beginingSenarios [numberRandom1 (beginingSenarios.length -1)]);

if (outcome === "lose") {
    window.alert("You Lose!");
}else if (outcome === "win") {
    window.alert ("You win!");
}