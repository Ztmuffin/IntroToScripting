{
var apples = 8;
var oranges = 12;
var peaches = 4;

    function DoubleFruit (params) {
        params += params;
        //adding 10 to said params
        console.log(params);
        return params;
}
 
 
    function CompareFruit() {
        //compare the ammount of fruit
        if (apples < oranges) {
            // then we do something
            alert("I have more oranges.");
        }
        else {
            alert ("I have more apples.");
        }
    }
    //this calls the function
    apples = DoubleFruit(apples); // putting 10 in here applys apples to DoubleFruit
        CompareFruit();

}