// ECMAScript is a scripting language standard and specification.
// 	javascript
// 	jscript
// 	ActionScript

// ES6 and ES2015 are same things

// Transpilers can be used to compile ES6 code to ES5
// 	Bable //is a lavascript compiler
// 	Traceur
// 	Closure


// What's new?
// 	let and const declaration
// 	Destructuring Assignment
// 	Classes and Inheritance
// 	Template Strings
// 	String Features
// 	Math & Number Features
// 	New Data Structures
// 	Iterators
// 	Generators
// 	Promises & Asynchronous Data
// 	Arrow functions



//------let and const declaration

//Test var

'use strict'
function testVar(){
	var a=30;
		if(true){
			var a=50;
			console.log(a);//50
		}
	console.log(a);//50
};
testVar();
////
for(var i=0;i<=10;i++){
	console.log(i);//12345678910
}
	console.log('last',i);//11

//Test let

function testLet(){
	let a=30;
		if(true){
			let a=50;
			console.log(a);//50
		}
	console.log(a);//30
};
testLet();
////
for(let i=0;i<=10;i++){
	console.log(i);//12345678910
}
	console.log('last',i);//here i is not defined

//Test const
const x=5;
x=10;//error....Assignment to constant variable.
//we can not reassign value in const

//but we can add value and remove in array or object of const var

const x=[];
x.push('a'); 
x.push('b'); 
console.log(x);//["a", "b"]


//-------Classes and Inheritance

class user{
	constructor(username, email, password){
		this.username=username;
		this.email=email;
		this.password=password;
	}
	static countUsers(){
		console.log('there are 50 users');

	}
	register(){
		console.log(`${this.username} is now registered and email is ${this.email} and password is ${this.password}`);	
	}
}

let sanju= new user('sanju','sanjaybargali.mail005@gmail.com','*****');
sanju.register();
sanju.countUsers();//can not access this will throw error------sanju.countUsers is not a function
user.countUsers();//this is static method fir user class this will not be available on sanju object

//--------//Inheritance

class Member extends user{
	constructor(username, email, password, memberPackage){
		super(username, email, password);
		this.package=memberPackage;
	}

	getPackage(){
		console.log(`${this.username} is subscribed to the ${this.package}`);
	}
}

let gaurav=new Member('gaurav', 'gaurav@gmail.com' , 'nahi bataunga', 'bhut jyada hai bhai');
gaurav.getPackage();//gaurav is subscribed to the bhut jyada hai bhai
gaurav.register();//gaurav is now registered and email is gaurav@gmail.com and password is nahi bataunga


//--------------Template literals

let name='sanjay';
function makeUpperCase(word){
	return word.toUpperCase();
}

let template=`
<p>${makeUpperCase('hello')}, ${name}</p>
<h1>how are you</h1>`

document.getElementById('EmelementId').innerHTML=template;


//--------------New String and Number Methods

let theString=`hello my name is sanju and i love javascript`;

//startsWith();
//endsWith()
//includes()

console.log(theString.startsWith('hello'));//true
console.log(theString.endsWith('javascript'));//true
console.log(theString.includes('sanju'));//true

//Hex
console.log(0xFF);//255

//Binary
console.log(0b101011);//43

//Octal
console.log(0o543);//355

console.log(Number.isFinite(3))//true

console.log(Number.isFinite(-3))//true

console.log(Number.isFinite(Infinity))//false

console.log(Number.isFinite(NaN))//false

console.log(Number.isNaN(NaN))//true

console.log(Number.isNaN(4))//false
console.log(Number.isNaN('sanju'))//false

console.log(Number.isInteger(5))//true
console.log(Number.isInteger('asdf'))//false
console.log(Number.isInteger(Infinity))//false


//---------Default Params and Spread Operator

function greet(parms){
	console.log(parms);
}
greet('hello');//hello

//

function greet( parms = 'hello' ){
	console.log(parms);
}
greet();//hello


//
let args=[1,2,3,4,5];

function test(){
	console.log(args);
}

//test.apply(null,args);//[1,2,3,4,5]
test(...args)//[1,2,3,4,5]

//
let args1=[1,2,3,4,5];
let args2=[1,2,3,4,5];

function test(){
	console.log(args1  + `,` + args2);
}

test(...args1,...args2)//[1,2,3,4,5,1,2,3,4,5]



//---------Set, Map, WeakSet, WeakMap

//-------Set

let myArray=[1,2,3,4,5];
let mySet=new Set(myArray);
console.log(mySet);//{1,2,3,4,5}

//
let myArray=[1,2,3,4,5];
let mySet=new Set(myArray);

mySet.add('this is fucking');
mySet.add({a:1,b:2});
mySet.delete(5);

//mySet.clear();//now mySet is empty everything is clean no value in this array or variable

console.log(mySet);//{1, 2, 3, 4,'this is fucking', {a:1,b:2}}
console.log(mySet.size);//6

mySet.forEach(function(val){
	console.log(val);

// 1
// 2
// 3
// 4
// this is fucking
// {a: 1, b: 2}

})

//-------Map

let myMap=new Map([['a1','hello a1'],['b1','hello b1']]);
console.log(myMap);//Map(2) {"a1" => "hello a1", "b1" => "hello b1"}

myMap.set('c1','hello c1');
console.log(myMap);//Map(3) {"a1" => "hello a1", "b1" => "hello b1", "c1" => "hello c1"}

myMap.delete('b1');
console.log(myMap);//Map(2) {"a1" => "hello a1", "c1" => "hello c1"}

// {"a1" => "hello a1"}
// key:"a1"
// value:"hello a1"

// {"c1" => "hello c1"}
// key:"c1"
// value:"hello c1"


//------WeakSet

let carWeakSet=new WeakSet();

let car1={
	name:'honda',
	model:'civic'
}
carWeakSet.add(car1);

let car2={
	name:'toyoto',
	model:'camry'
}
//can add
carWeakSet.add(car2);
//can delete
// carWeakSet.delete(car1);

console.log(carWeakSet);

//------WeakMap

let carWeakMap=new WeakMap();

let key1={
	id:1
}
ler car1={
	make:'honda',
	model:'civic'
}

carWeakMap.set(key1,car1);//key and value like above map//key1 will be key and car1 will be value everything
console.log(carWeakMap);

//{Object => Object}
//key:{id: 1}
//value:{make: "honda", model: "civic"}




//----------Arrow function

//benefits
	//sorter syntax
	//allow to bind this lexically

function prefixer(prefix){
	this.prefix=prefix;
}


prefixer.prototype.prefixArray=function(arr){
	let that=this;//we have to use a new var and then assign this to var name
	return arr.map(function(val){
			// console.log(this.prefix + x);//this will not run

			console.log(that.prefix + ' ' + val);
	});
}

let pre = new prefixer('hello');
pre.prefixArray(['sanju','gaurav']);
//hello sanju
// hello gaurav

//-------with arrow functin we need not to assign this to new var 

function prefixer(prefix){
	this.prefix=prefix;
}

prefixer.prototype.prefixArray=function(arr){
	return arr.map((val) => {
		console.log(this.prefix + ' ' + val);
	});
}

let pre = new prefixer('hello');
pre.prefixArray(['sanju','gaurav']);
//hello sanju
//hello gaurav


//--------Promises
//Promise object is used for defered and asynchronous computation

//Immediatley Resolved
let myPromises= Promise.resolve('sanju');
myPromises.then((res) => console.log(res));

//------

let myNewPromise=new Promise(function(resolve,reject){
	setTimeout(() => resolve(4),2000)

});

myNewPromise.then(
	(res) => {
	res +=3;
	console.log(res); //7 after 2 second
});

//--------------

function getData(method, url){
	return new Promise(function(resolve,reject){
		var xhr=new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload=function(){
			if(this.status >= 200 && this.status < 300){
				resolve(xhr.response);
			}else{
				reject({
					status:this.status,
					statusText:this.statusText
				});
			}
		};
		xhr.onerror=function(){
				reject({
					status:this.status,
					statusText:this.statusText
				});
		};
		xhr.send();
	});
}

getData('GET','http://jsonplaceholder.typicod.com/albums').then(function(data){
	console.log(data);//print data on console

	//print data on screen
	let todos=JSON.parse(data);
	let output ='';
	for(let todo of todos){
		output +=`
		<div>
			<h3>userId -- ${todo.userId}</h3>
			<h2>id -- ${todo.id}</h3>
			<h1>title-- ${todo.title}</h3>
		</div>`
	};
	document.getElementById('getData').innerHTML=output;

}).catch(function(err){
	console.log(err);
})


//--------------Generators

//are basically functions that can be paused and resumed as many times as we want
//on each pause it can yield value back and after resume another value back again of yield

//we use * with function like below

function* g1(){
	//..
}
//or
function *g1(){//prefered
//..
}

//example

function *generatorExmpl(){
	console.log('hellow');
	yield 'yield 1 ran...';
	console.log('how are you');
	yield 'yield 2 ran...';
}

var g=generatorExmpl();

console.log(g.next());
//hellow
//{value: "yield 1 ran...", done: false}

//console.log(g.next().value);//yield 1 ran...

console.log(g.next());
//how are you
//{value: "yield 2 ran...", done: false}

console.log(g.next());
//{value: undefined, done: true}

//we can loop also like this
function *generatorExmpl(){
	console.log('hellow');
	yield 'yield 1 ran...';
	console.log('how are you');
	yield 'yield 2 ran...';
}

var g=generatorExmpl();
for(let val of g){
	console.log(val)
}
//hellow
//yield 1 ran...
//how are you
//yield 2 ran...
