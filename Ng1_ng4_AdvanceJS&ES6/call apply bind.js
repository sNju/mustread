//difference between call apply and bind,(OOJS);

// traditionally we have object{
// 	property and 
// 	method
// }

// suppose we have two object and each have its own property and its method
// Object 1
// property
// method

// Object 2
// property
// method

//but in javascript we can do like this 

// Object 1
// property

// Object 2
// property


//Method()
//we can write method separately and using call appy and bind we can use as method on these object  
//this way we can make common mathod for various object

var obj={num:2};
var addTo=function(a){
	return this.num + a;
};


//whichever function we wanna execute we put it first and the call appy or bind method

addTo.call(obj,5);//functionName.call(obj,functionArgumentes)

//this will take two parameter the first one is obj whichever we wanna apply it and the second is the arguments for function itself

//same thing if we have multiple argumentes then we will pass continuously


var obj={num:2};
var multiplyThis=function(a,b,c,d){
	return this.num * a * b* c * d;
};
multiplyThis.call(obj,1,2,3,4);

//Apply
//we don't use multiple argumentes this is the main diff

var obj={num:5};
var addThis=function(a,b,c,d){
	return this.num + a + b + c + d;
};
var arr=[1,2,3,4];
addThis.apply(obj,arr);

//Bind
var obj={
	no:10
}
var devide=function(a){
	return this.no * a;
}

var bindData=devide.bind(obj);
console.log(bindData(2));

//////////////check this
var obj={
	no:5
}
var functinName=function(arg1,arg2,arg3){
return this.no + arg1+ arg2 + arg3;
}

//call
functinName.call(obj,arg1,arg2,arg3);

//apply

var arr=[arg1,arg2,arg3];
functinName.apply(obj,arr);

//bind

var bindFunc=functinName.bind(obj);
bindFunc(arg1,arg2,arg3);

