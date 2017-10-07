// type annotations
// arrow function
// interfaces
// classes
// constructors
// access modifiers //public,private 
// properties
// modules
// superset of javascript.any valid js code valid for ts
//in c# or java when we define var we need to define the type of var but in ts it is optional..but using this feature makes our app more predictable

//catch errors at compile time not run time//good feature

//TypeScript ---------> Transpile >----------->JavaScript
//when we run our app using ng serve angular cli calls typescript compiler under the hood to transpile all typescript code

///////////////////////////////
//diff btwn var and let
function doSomething(){
	for(var i=0; i<5; i++){
		console.log(i);

	}
	console.log('result :::', i);
	//result ::: 5  
	//this is the issue we have when declaring a variable using the var keyword 
	//in javascript a variable declare with a var keyword is scope to the nearist function
}

doSomething()    // 0
				//1
				//2
				//3
				//4
				//final value is  5//


// but in let

function doSomethingElse(){
	for(let i=0; i<5; i++){
		console.log(i);

	}
	console.log('final value is ', i);//error i is not defined

}

doSomethingElse() 	// 0
					//1
					//2
					//3
					//4
					//error i is not defined

////////////////////////////////////
let count=5;//type script bydefault makes the type of this var ((number))
count='asd';//here we are assigning the number type to string this is error in ts
////////////
let a;
a=1;
a=true;
a='asdf';//here all are valid because when we declare a variable without any type then it bydefault make it any type

let b:number;
b=5;
b='asdf';//this is not valid 
///////////////
let a:number;
let b:string;
let c:boolean;
let d:any;
let e:number[]=[1,2,3,4];
let f:any[]=[1,'a',2,'b',true,false,'..etc','we can put any type of var here'];

let w=0;
w=4;//but this is valid not valid in const

const x=0;
const y=1;
const z=2;
z=4;//error

//we cannot reassign the value in const var because these are constant

//in lot of OOL we have this concept called enum
enum Color{Red=0,Green=1,Blue=2}
let backgroundColor=Color.Red;

/////////////////////////////////////
let message='asdf';//now type of message var is string
let endWith=message.endsWith('f');
console.log(endWith)//true

let message1;//but now type of message is any
message1='asdf';
let endwithF=(<string>message1).endsWith('f');
let alternativeWay=(message1 as string).endsWith('f');


////////////////////////////////annotation
let drawPoint=(point:{x:number,y:number}) => {
	//....
};

drawPoint({x:1,y:2});

// or we can use interface
interface PointX{
	x:number,
	y:number
}

let drawPointX=(point : PointX) => {
	//....
};

//in oops we have this concept called cohesion

//void return nothing

