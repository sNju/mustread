// es5 vs es6 {ECMAScript}

// ECMAScript===> Language
// JavaScript===> Dialect (ollows ES)

// ES5       ===>{support by all browsers}
// ES6       ===>{needs polyfills, transpilers}


if(true){
var x=5;
}
console.log(x);//result 5

//but 
if(true){
let x=5;
}
console.log(x);//result x is not define because block scope let is a block scope can not access outside 

let x=5;
if(true){
let x=5;
console.log(x);//5
}
x=10
console.log(x);//10

//but in const we can not change or reassign
const x=5;
if(true){
const x=5;
console.log(x);//5
}
x=10
console.log(x);//error assignment to constant variable

//but we can change array or object in const why
const x=[1,2,3];
console.log(x);//[1,2,3]
x.push(4)
console.log(x);//[1,2,3,4]

//also in object
const x={a:1111};
console.log(x);//{a:1111}
x.b=2222;
console.log(x);//{a:1111,b:2222}

//Hoisting with let and const

x=10;
console.log(x);//10
var x;

//but with let we can not
x=10;
console.log(x);//let is not define////we have to declare our var before initializing
let x;

//look here
function dosmth(){
	x=10;
}
let x;
dosmth();//because this is calling after declaring x this will run
console.log(x);//10

//fat arrow
(/*function arguments*/)=>{
/*function body*/
}

function fn(){
	console.log('123');
}
fn()//123

//with arrow function

var fn= () => {
	console.log('123');
}
fn()//123

//same thing
var fn= () =>  console.log('123');//no return keyword we can write in one line
fn()//123

function fn (a){
return a+5;
}
console.log(fn(5))//10
//same as 
var fn= (a) => a+5; 
console.log(fn(5))//10

//if we have only one parameter we can write like
var fn= a => a+5; 
console.log(fn(5))//10
//if many arguments//and if only two and we are passing many arguments this will omit other arguments

let fn=()=>{
	let a=2;
	let b=2;
	return a+b;
}
console.log(fn())//4
//same thing
let fn=(a,b)=> a+b;
console.log(fn(2,2,3,4,5))//4//it will omit aftet 2
//look
setTimeout(()=>console.log('asdf'),1000);//asdf

//this refers to the global scope to the window Object 
function fn(){
	console.log(this);
}
fn();
//same 
let fn=()=>	console.log(this);
fn();
//
//<button>click</button>
var btn=document.querySelector('button');
btn.addEventListener('click',function(){
	console.log(this);//this will return this htmlDomObject this button element object
})

//but with arrow functin this will still return window object
var btn=document.querySelector('button');
btn.addEventListener('click',()=>console.log(this))//window object


//Object Literal Extentions
let obj={
	a:1,
	b:2
}
console.log(obj);//{a: 1, b: 2}
//same thing
let a=1;
let b=2;
let obj={
	a,
	b
}
console.log(obj);//{a: 1, b: 2}
//but we can still override it
let a=1;
let b=2;
let obj={
	a:1111,
	b
}
console.log(obj);//{a: 11111, b: 2}

var a=1;
var b=2;
var obj={
	a,
	b
}
console.log(obj);//{a: 11111, b: 2}

var obj={
	a:1,
	b:2,
	haha(){
		return '123'
	}
}
console.log(obj.haha())
//

let name='sanju';
let age=23;
let ageField='age';
let obj={
	"name":'max',
	[ageField]:24,
	"greet me"(){
		console.log(this.name + this.age);
	}
}

console.log(obj);//{name: "max", age: 24, greet me: ƒ}
obj["greet me"]();//max24

/////////////////
//The Rest Operator 

let numbers=[1,2,3,4,5];
function sumUp(addTo){
	let result=0;
	for(let i=0;i<addTo.length;i++){
		result +=addTo[i];
	}

	return result;
}
console.log(sumUp(numbers));//15

//but here arguments is not an array we can not pass only one parameter we have to pass many equal to arguments
function sumUp(addTo){
	let result=0;
	for(let i=0;i<addTo.length;i++){
		result +=addTo[i];
	}

	return result;
}
console.log(sumUp(1,2,3,4,5));//0

//we will rest opetaor here simply
function sumUp(...addTo){//here ...addTo automaticly convert them in array this is default behaviour check below log detail
	console.log(addTo)//[1,2,3,4,5]
	let result=0;
	for(let i=0;i<addTo.length;i++){
		result +=addTo[i];
	}

	return result;
}
console.log(sumUp(1,2,3,4,5));//15//here 

//this is good use and  to understand
let numbers=[1,2,3,4,5];
console.log(Math.max(numbers));//NaN
//but here is right now
let numbers=[1,2,3,4,5];
console.log(...numbers)//1 2 3 4 5
console.log(Math.max(...numbers));//5

//the for-of-loop
let testResults=[1,2,3,4,5];
for(let testResult of testResults){
	console.log(testResult);//1 2 3 4 5
}

//but we can do this already but here start from 0
let testResults=[1,2,3,4,5];
for(let i; i<testResults.length;i++){
	console.log(i);//0 1 2 3 4 
}
//Destructuring - Arrays

let numbers=[1,2,3,4,5];
let [a,b]=numbers;//1,2 
console.log(a);//1
console.log(b);//2