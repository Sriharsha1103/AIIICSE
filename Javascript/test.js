function handleClick(){
    var heading1 = document.getElementById('heading1');
    heading1.innerHTML = 'Hello World';
}
//Install Quokka.js Extension and press ctrl+k q

var var1 = 15
var var2 = 30
console.log(var1)
console.log(var2)
var var3 = var1 + var2
console.log(var3)

//Data Types
/* Number, String, Null, Undefined, Boolean
 */

var age = 24; //Number
var name = 'Harsha' //String
var object = null //Null
var address; // Undefined
var isEligible = true //Boolean
age
name
object
address
isEligible

//Control Statements
function isEven(num){
    if(num % 2 == 0)
        return true
    else
        return false
}

console.log(isEven(5))
console.log(isEven(10))

function findFactorial(num){
    var fac = 1
    for(var i=num ; i > 1;i--)
        fac *= i
    return fac
}

console.log(findFactorial(5))

/* European Computer Manufacturers Association Script (ECMA script) 6 Features */
/*  1. let + const
    2. Arrow Functions
    3. Classes
    4. Template Strings
    5. Destructuring
    6. Default + Rest + Spread
    7. For-of, Iterators
    8. modules
    9. Map + Set
    10. Promises*/

//Hoisting

//Scope of Variables
/* Block Scope, Global Scope, Local Scope */
//Global Scope

//Function expression

//First Class Function

//Immediate Invocation Functional Expression

//What is the output?
/* (function (x){
    return (function (y){
        console.log(x)
    })(2)
})(1)
 */
//Function Scope

//What is the output?
/* for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    }, i *1000)
}
 */

//function Hoisting


//What is the output?
/* var x = 21
var fun = function (){
    //console.log(x);
    var x = 20
}
fun()
 */
//Objects in Java script
//Nested Objects
//Array of objects
// Call, Bind and Apply


//Destructuring

//Spread vs Rest operators

//rest operator with destructuring


//class
//Arrow Functions


//Callback Functions
// Scenario1

// Scenario 2 


//Call back


//Higher Order Functions: Map, Reduce, Filter

//For: in, of, each

//Map


//Filter
//List only items with quantity more than one

//Reduce
//Find total price of my cart

//Largest priced item
