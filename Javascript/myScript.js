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
myName
var myName = 'Harsha'

//Scope of Variables
/* Block Scope, Global Scope, Local Scope */
//Global Scope
var num4 = 12;

function add(num1, num2)
{
    var num3 // local scope
    num3 = num1 + num2 + num4
    if(num3){
        var num5 = 'hello' //block scope
    }
    console.log(num5)
    return num3
}

console.log(add(4,5))
//console.log(num3) //num3 is not defined local scope

//Function expression
function square(num){
    return num * num
}

var squared = function (num){
    return num * num
}

console.log(square(5));
console.log(squared(15));

//First Class Function

function displaySquare(fn){
    console.log("Square "+fn(5));
}

//Immediate Invocation Functional Expression
/* (function (num){
    console.log(num*num)
})(5) */

(function (x){
    return (function (y){
        console.log(x)
    })(2)
})(1)

//Function Scope

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    }, i *1000)
}

//function Hoisting
displayText();

function displayText(){
    console.log("Displaying some text");
}

displayText()

//What is the output?
var x = 21
var fun = function (){
    //console.log(x);
    var x = 20
}
fun()

//Objects in Java script
var person = {
    name: 'Harsha',
    age:35,
    gender:'male',
    mobile:1234567890,
}
person
//Nested Objects
var student ={
    name:'Ajay',
    age:20,
    address: {
        street: '10th Lane',
        area: 'Brodiepet',
        city:'Guntur',
        pincode:522002
    }
}
student
//Array of objects
var students = [
  {
    name: "Ajay",
    age: 25,
    gender: "male",
    mobile: 1234567890,
  },
  {
    name: "Vijay",
    age: 45,
    gender: "male",
    mobile: 1234567890,
  },
  {
    name: "Vijaya",
    age: 18,
    gender: "female",
    mobile: 1234567890,
  },
  {
    name: "Akila",
    age: 24,
    gender: "female",
    mobile: 1234567890,
  },
];
students

// Call, Bind and Apply

var person1 = {
    name:'abc',
    age:25,
    getPerson: function(...args){
        console.log(this.name, this.age)
        return 'Age: '+this.age+' Name: '+this.name+ ' '+args
    }
}
var person2 = {
    name:'def',
    age:32,
}
person1
console.log(person1.getPerson())

person2
const cars = ["BMW", "Volvo", "Mini"];
console.log(person1.getPerson.call(person2))
console.log(person1.getPerson.apply(person2,['Hello']))
var myFunc = person1.getPerson.bind(person2,['Hello','World'])
console.log(myFunc());

//Destructuring
const myFruits = ['Apple','Banana','Cherry','Dragon Fruit']
let fruit1 = myFruits[0]
let fruit2 = myFruits[1]
let fruit3 = myFruits[2]
let fruit4= myFruits[3]
fruit1
fruit2 
fruit3 
fruit4

let [apple,banana,cherry,dragon] = myFruits
apple
banana
cherry
dragon

//Spread vs Rest operators
var ar1 = [1,2,3,4,5]
var ar2 = [6,7,8,9,10]
var ar3 = ar1.concat(ar2)
ar1
ar2
ar3

ar3 = [...ar1,...ar2]
ar3

function displayArray(v1,v2,...v3){
    console.log(v1, v2, v3);
}

displayArray(12,34,45,67)

//rest operator with destructuring

const arr1 = [1,2,3,4,5]
const [val1, val2,...rest] = arr1
val1
val2
rest

//class
class Vehicle{
    constructor (name){
        this.name = name
    }

    show(){
        return 'This car is '+this.name
    }
}

const vehicle = new Vehicle('alto')
console.log(vehicle.show());

class Model extends Vehicle{
    constructor(name, make){
        super(name)
        this.make = make
    }
    toString(){
        return `${this.show()} from ${this.make}`
    }
}

const model = new Model('Mustang','Ford')
console.log(model.toString());

//Arrow Functions

function sum(num){
    let sum = 0
    while(num > 0){
        sum += num % 10
        num = parseInt(num / 10)
    }
    return sum
}

console.log(sum(1234));

const findSum = (num) => {
    let sum = 0
    while(num > 0){
        sum += num % 10
        num = parseInt(num / 10)
    }
    return sum
    
}
console.log(findSum(234));

//Callback Functions
const display = (text) => {
    console.log(`My name is ${text}`);

}

const func1 = (name) =>{
    display(name)
}

const func2 = (name) => {
    display(name)
}

func2('Naga')
func1('Sriharsha')
/* Scenario1
const add2Num = (num1, num2) => {
    let result = num1 + num2
    return result
}

const displayResult = (result) => {
    console.log(result)
}

const funcCall = add2Num(4,5) */

/* Scenario 2 
const add2Num = (num1, num2) => {
    let result = num1 + num2
    displayResult(result)
}

const displayResult = (result) => {
    console.log(result)
}

add2Num(4,5) */


//Call back
const add2Num = (num1, num2, callback) => {
    let result = num1 + num2
    callback(result)
}

const displayResult = (result) => {
    console.log(result)
}

add2Num(4,5, displayResult)


//Higher Order Functions: Map, Reduce, Filter

//For: in, of, 
let text = "";

for (let x of cars) {
  text += x + " ";
}
text

let language = "JavaScript";
text = "";

for (let x of language) {
    text += x + " ";
}
text

const person3 = {fname:"John", lname:"Doe", age:25};

for (let x in person3) {
  text += person3[x];
}
text

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
txt

//For each
txt=""
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value;
}

txt
//Map
const myCart = [
    {id:1, itemName:'Cinthol',price:160, quantity: 4},
    {id:2, itemName:'Colgate',price:45,quantity: 1},
    {id:3, itemName:'Pepsodent',price:180,quantity: 1},
    {id:4, itemName:'Dove',price:300,quantity: 4},
    {id:5, itemName:'Parachute',price:210,quantity: 1},
    {id:6, itemName:'Vim Liquid',price:110,quantity: 1},
]

myCart.map(function(item,index){
    console.log(item.price);
    console.log(item.itemName);
    console.log(item.quantity);
})

//List only items with quantity more than one
const newCart = myCart.filter(function(item){
    return item.quantity!=1 ? item : ''
})
console.log(newCart);


//Find total price of my cart

const totalPrice = myCart.reduce((acc,curr)=>{
    return acc + curr.price
},0)
console.log(totalPrice);

//Largest priced item
const largest = myCart.reduce((acc,curr)=>{
    return (acc.price || 0) >  curr.price ? acc : curr
},0)
console.log(largest);