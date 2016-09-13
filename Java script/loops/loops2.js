//this is the first of a line to catenate;
var lineStart = "The ";

//will access a part of the array to add to the line;
    var animals = ["Dog", "Cat", "Mouse", "Fish", "Horse", "Cow", "Human", "Monkey", "Camel", "Sheep", "Penguin", 
    "Lion", "Robot", "Bunny", "WiggleWorm", "Chicken", "Rat", "Fox", "Turkey", "Hippo", "Bear", "Duck", "Deer", 
    "Robbin", "Mole", "Eagle", "Alien", "The PEPSI"];
//will add this to the end of a line;
var lineEnd = " walked and walked";

for (var i = 0; i < animals.length; i++) {
   console.log(lineStart + animals[i] + lineEnd);   // for loops are cool!!!
}