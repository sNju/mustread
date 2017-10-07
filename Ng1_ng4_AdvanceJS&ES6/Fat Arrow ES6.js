"use strict"

			 //create a function in ecma5

var getA=function(a){
	return a;
};
console.log(getA(5))


			//we can convert using fat arrow

let getA = a => a;

//basically the function replaced by the fat arrow
 //arguments comes on the left side and body of the function goes on the right side 

console.log(getA(5))

let square= a => a*a;
console.log(square(5));

//and this will be more reasonable sentence

let square2= (a) => {return a* a};
console.log(square2(5));

//if i don't pass the arguments and use the global variable

var x=10;

let thisIsAwesome= () => {return x+x};//in arguments we can use _ instead of () but it is not recommended and work will same.
console.log(thisIsAwesome());

//passing multiple arguments

let mult=(a,b,c,d)=>{return a+b+c+d}
console.log(mult(1,2,3,4));


//some complecated example and good use of fat arrow

var x=function(){
	this.val=1;
	setTimeout(function(){
		this.val++;
		console.log(this.val);
	},1);
};
var xx=new x();
console.log(xx)
//this will throw error under the timeout function this.val don't know the value of outside ;

//do like this because these don't know about this use parent this

var x=function(){
	var useLkeThis=this;
	useLkeThis.val=1;
	setTimeout(function(){
		useLkeThis.val++;
		console.log(useLkeThis.val);
	},1);
};
var xx=new x();
console.log(xx)

//but we can access x using this also using fat arrow //this is awesome woow love it

var y=function(){
	this.val=1;
	setTimeout(() => {
		this.val++;
		console.log(this.val);
	},1);
};
var xx=new y();
console.log(xx)


//check and get arguments of function 
var a=function(){
	console.log(arguments[0])
};
console.log(a(1,2,3));//it will return 1

//but in es6 introduce spread operator when we wanna pass n number of arguments we don't empty we use ...n three dots and n

var a=(...n) => {
	console.log(n[2])
}
console.log(a(1,2,3));
