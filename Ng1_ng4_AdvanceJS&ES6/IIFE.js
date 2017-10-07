//immediately invoked function expression
//some people call it self executing anonymous function
//some people call it self invoked anonymous function

//function
function increment(i){
	return i+1;
}

//what is function expression

var increment=function(i){
	return i+1;
}
increment(i);

//but using iife //preferable
(function(i){
	return i+1
})(i);
//or we can do like this
(function(i){
return i+1;	
}(i));

//if we are not returning any value back we can also do this

!function(){/*code here*/}();
~function(){/*code here*/}();
-function(){/*code here*/}();
+function(){/*code here*/}();//these are all valid syntax

//where to use and how to use it
//minifying it
(function($){
	$(this).addClass('myClass');

})(window.JQuery);//here we are passing window.JQuery (to $) this is also reducing my scope lookup
//$ sign is only available within this function so its not gonna go out and look for window.JQuery so my code is bit faster 
//here it taks a global object (window.JQuery) and makes it local fot this perticular function
//IIFE are closures that helps you establish private methods //exposing some properties for later use

//here we are creating a simple library

var counter=(function(){
	var i=0;
	return{
		get:function(){
		return i
		},
		set:function(val){
			i=val;
		},
		increment:function(){
			i++;
		}
	}
})();
console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());


