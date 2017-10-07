//callback functions which are also called higher order functions
//functions are actually first class object

let x=function(){
	console.log('i am calling from outside')
}
let y=function(callback){
	console.log('inner function');
	callback();
}
y(x);

//this is a simple example

let add =function(a,b){
return a+b;
}
let multiply =function(a,b){
return a*b;
}

let doWhatvr=function(a,b){
	return console.log(`two numbers are, ${a} and ${b}`)
}

let calc=function(num1,num2,callback){

	if(typeof callback == 'function'){
		return callback(num1,num2);
	}
	else{
		alert('enter valid value');
	}
}

calc(2,2,add);
calc(2,2,multiply);
calc(2,2,doWhatvr);

//also we can pass function directly in args
calc(2,2,function(a,b){return a+b});

//
var myArr=[{
	num:1,
	str:'a'
},
{
	num:2,
	str:'b'
},

{
	num:3,
	str:'c'
}]

myArr.sort(function (val1,val2) {
	if(val1.str > val2.str){
		return -1;
	}
	else{
		return 1;
	}
});