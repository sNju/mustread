//spread operators and rest parameters in es6 that is javasctipt latest version

//suppose i have a funtion and i don't know how many parameter i'm going to pass it then i use spread operator ...
//and here n is variable name we can say and inside the function this will be treated as array 

var x=function(...n){
	console.log(n);
}
x(1,2,3,4,5);
//this will return an array

//when we pass arguments using spread operator its call rest paramentes


var x=function(a,b,c,...n){
	console.log(n);

}
x(1,2,3,4,5);

//and spread operator not only for the arguments we can use it somewhere else because 

//like this
var x=['a','b','c','d','e'];
var y=['z','y','x',...x,'w'];
console.log(y)

var a=[1,2,3];
var b=[4,5,6,7,8];
a.push(...b);
console.log(a)
