 
 var theExample;
 var i = "10";
 // prompt ("On a scale of one to 10 how much do you enjoy using switch statements?");
   var i = parseInt(i);

 console.log (i);
    switch (i) {
        case i >= 7:
            theExample = "I feel the same, they're great!";
            break;
        case i >= 4 && i <7:
            theExample = "you should like them, they're great!";
            break;
        case i <= 3:
            theExample = "Why not all the time? They're great";
            break;
        default:
            theExample = "I'm sorry I do not understand what you have entered.";
    }
    alert(theExample);