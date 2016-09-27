 
 var theExample;
 var demonstrate = "no";

 console.log (demonstrate);
    switch (demonstrate) {
        case "yes":
            theExample = "So do I, they're great!";
            break;
        case "no":
            theExample = "you should like them, they're great!";
            break;
        case "sometimes":
            theExample = "Why not all the time? They're great";
            break;
        default:
            theExample = "I'm sorry I do not understand what you have entered.";
    }
    alert(theExample);