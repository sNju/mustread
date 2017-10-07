//javascript doesn't have class definition like java....in javascript instead of creating class we create constructor

//ECMA6 has now class keyword, however we will be using function here 

// Creating subClass(subConstructor)
// Overriding in Prototype chain
// Adding Prototype to master Object


//baseClass
var job =function(){

	this.pays=true;
}

//prototype Method

// job.prototype.print=function(){
// 	console.log(this.pays ? 'please hire me' : 'no thanks')
// }

//Subclass
var techJob=function(title,pays){
	//job.call(this)
	this.title=title;
	this.pays=pays;
}

techJob.prototype=Object.create(job.prototype);
techJob.prototype.constructor=techJob;

//overriding this print method

// techJob.prototype.print=function(){
// 	console.log(this.pays? this.title + 'job is greate':'i would rather learn js');
// }


//directly adding print method in master object
//all object in javascript are created from 'Object'///Object is the master object or root object

Object.prototype.print=function(){
	console.log('i amd executing from the master object');
}


var softwarePosition=new techJob('javascript programmer',true);
console.log(softwarePosition.print());
