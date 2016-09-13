 var randomNumber = Math.round(Math.random () * 15 );
// var randomNumber = 15;


if(randomNumber%3 ===0 && randomNumber != 0){
    if (randomNumber%5 === 0){
        alert("FizzBuzz");
    }
    else {alert("Fizz");
    }
}
else if(randomNumber%5 === 0 && randomNumber != 0) {
    alert("Buzz");
}
else { 
    console.log(randomNumber);
}