//prototype inheritance
//prototype concept

//by default every function has a property called prototype,
//this property by default is empty and we can add properties and methods to it

//x is a function and has a prototype has some property and method 
//if i create new object from x then these property and methods will be inherited from its prototype


//Constructor

var x=function(){

};
//every function expression is a constructor

var x=function(j){
	this.i=0;//by defalut created
	this.j=j;

	this.getJ=function(){
		return this.j;
	}
};

//X1 AND X2 ARE INSTANCES OF X
//we are creating objects form x
var x1=new x(2);
var x2=new x(4);

x1.getJ();
x2.getJ();


//same thing using prototype

var x=function(arg1){
	this.b=arg1;

};
x.prototype.a=5;
x.prototype.getA=function(){ //ObjectName.prototype.MethodName
	return this.a + this.b;
}
;

var a1=new a(5);

a1.getA();//we can create many objects from x and getA will be available on every object and getA is a prototype of x


//Master Object
//every object in javascript is created form master object

var x=function(){

}
console.dir(x)//dir allows us to much more detail about object
//we will see _proto_ this is master object x is created from this _proto_ another object called function 
//_proto_ means parent or creator
//within this __proto__ we will see another _proto which means function is created form this master object
//__proto__:Object //this is master object

//////////
//Creating subClass (subConstructor)
//overriding in prototype chain
//adding prototype in master object
