function* simpleGenerator(){
	yield 'apples';
	yield 'bacon';
	console.log('ok this is the line after bacon')
	yield 'filan';

}

var simple=simpleGenerator();
console.log(simple.next());//if we want to return value otherwise this will return an object and true false value as well
console.log(simple.next().value);
console.log(simple.next().value);
console.log(simple.next().value);



//what are main use of generator function

function* getNextId(){
	let id=0;
	while(id<3){
		yield id++;
	}
}

let createUser=getNextId();
console.log(createUser.next().value);//0
console.log(createUser.next().value);//1
console.log(createUser.next().value);//2
console.log(createUser.next().value);//undefined
