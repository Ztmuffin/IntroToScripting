

var sign = prompt("What is your astrological sign?").toLocaleLowerCase();
alert("sensing your sign");

switch (sign) {
    case "taurus":
        alert("You will get hungry today arround noon");
        break;
    case "virgo":
        alert("Your emotions will make you feel something today");
        break;
    case "capricorn":
        alert("what you put in rhymes with corn. Do you want corn?");
        break;
    case "leo":
        alert("Your emotions will make you eat something today");
        break;

    default:
    alert("please enter a valid sign.");
        break;
}
    
