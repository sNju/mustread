class person{

	constructor(name,age,height){
		this.name=name;
		this.age=age;
		this.height=height;
	}

	displayName(){
		console.log(this.name);
	}

	displayAge(){
		console.log(this.age);
	}
	displayHeight(){
		console.log(this.height);
	}

}

var sanju=new person('sanju',23,6);
sanju.displayHeight();//6

var ajju=new person('ajju',23,7);
ajju.displayHeight();//7


//for inheritance//we use extend keyword here we are inheriting person object here //and person class technically called super class

class programmer extends person{

	constructor(name,age,height,language){
		super(name,age,height);
		this.language=language;
	}
	displayLanguage(){
		console.log(this.language);
	}

}

var sanjay=new programmer('sanjay',24,6,'JavaScript');
sanjay.displayName();//sanjay 
sanjay.displayAge();//24
sanjay.displayHeight();//6
sanjay.displayLanguage();//JavaScript


