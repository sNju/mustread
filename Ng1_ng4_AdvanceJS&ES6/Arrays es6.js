let programmingLangauges=['JavaScript','ruby', 'go'];
for (let i=0;i<programmingLangauges.length;i++){
	console.log(`i really like ${programmingLangauges[i]}`);
	//i really like JavaScript
	//i really like ruby
	//i really like go
}

//we can do same thing in very less code in es6 //awesome features
let programmingLangauges=['JavaScript','ruby', 'go'];
for (let language of programmingLangauges){
	console.log(`i really like ${language}`);
	//i really like JavaScript
	//i really like ruby
	//i really like go
}

//
function sum(){
console.log(arguments);
}
sum(1,2,3);//[1, 2, 3]
//

//in es 6

function sum(){
arguments=Array.from(arguments);
return arguments.reduce((prev,cur)=> prev + cur);
}
console.log(sum(1,2,3))//6

///woow check this
console.log(Array.from('Does this work'));//["D", "o", "e", "s", " ", "t", "h", "i", "s", " ", "w", "o", "r", "k"];


///

let students=[
	{
		name:'sanju',
		course:'History'
	},
	{
		name:'ajju',
		course:'Physics'
	},
	{
		name:'raka',
		course:'science'
	},
	{
		name:'bhoj',
		course:'Physics'
	}
];

let PhysicsStudent=students.find((student)=>{ //.find find the first one and stop//if we want all then we use {filter}//or if we can find index also using {findIndex}

return student.course === 'Physics'

});

console.log(PhysicsStudent);//{name: "ajju", course: "Physics"}