//basic class 
class studentDetails{
	public fName: string;
	public lName: string;
	public fullName: string;

	constructor(fName: string,lName:string){
		this.fName=fName;
		this.lName=lName;
		this.fullName=this.fName + ` ` +this.lName;
	}

	getFullName(){
		console.log(this.fullName);
	}

	getNo(){
		alert('this is fucking');
	}

}

let s1=new studentDetails('sanju','singh');
s1.getFullName();

//inheritance

class OldStudentDetails extends studentDetails{
	constructor(fName,lName){
		super(fName,lName);

  }
  getOldNo(){
    return super.getNo();
  }
}

let oldStd= new  OldStudentDetails('this is ', 'fucking');
oldStd.getFullName();
oldStd.getOldNo();

//calculation

class multiplying{
	public outputNo: number;

	multi(no1:number,no2:number):number{
		this.outputNo=no1 * no2;
		return this.outputNo;
	}
}

let makeObjMulti=new multiplying();
console.log(makeObjMulti.multi(10,10));

//get and set detail

class studentGetSet{
	private _stuName: string;
	private _stuPer: number;
	protected _test: string;//protected bydefault convereted in public

	public set stuName(val:string){
		if(val.length == 0){ //using exception handling
			throw "please enter student name";
		}
		this._stuName=val;
	}

	public get stuName() : string {
		return this._stuName;
	}

	public set stuPer(val:number){
		if(val < 60){
			throw "Per must be gre than 60";
		}
		this._stuPer=val;
	}

	public get stuPer(): number {
		return this._stuPer;
	}

}

let getStudentDetailOfGetSet=new studentGetSet();
try{
  console.log(getStudentDetailOfGetSet.stuName='sanju');
  console.log(getStudentDetailOfGetSet.stuPer=50);
}
catch(ex){
 	alert(ex);
}


//if i write ts like this 
class customer{

}
//it converts it in js like this//it creates a closure and a IIFE
var customer=(function(){
	function customer(){

	}
	return customer;

}());

//
class customer{
  public customerName : string;
 
  //public customerName : string ="sanju";
  //we are creating public variable and here customerName is (var name)
  // and : string (data type of this customerName variable) and after = we are assigning value ("sanju")

  constructor(){
    this.customerName='asdf';
  }

	 validate() : void {
	 	alert(this.customerName);
  }
   //we are creating a method here without function we just type name of method in ts
   //and after validate() : void (here after : we declare return type of our function
   //it could be anything number string void any boolean etc.)    
  
   validatea() : boolean {
     alert(this.customerName);
        return true;
	 }//return is boolean type

   //if we are passign arguments and the we write like this here we also define data type of args

   passingArgs(num:string) : string {
        return num;
	 }//return is boolean type

  }
let x=new customer();
x.validate();

///all javascript code are valid type sctip code //this is very important

//Interface //we use interface in ts also
interface anyname{
	add();
}
class sanju implements anyname{//we implements the method of interface in class
	add(){
    alert('works');
  }
}
var x=new sanju();
x.add();

//protected //can be accessible inside the child classes//but in is there is no protected //this mean this is global bydefault
//ts is not like what you see what you get........................
//is ts private variable is not private this is also a global inside js file just check it this a bug in ts just for language performance
//we create modules means we create separate separate class files
//basically we don't create more than one class in one ts file because js will be very big//we can do but we don't mostly
//we use another ts files and use (export) keyword if we want to use this class in other class also and in other class in 
//we have to imports them using (import {name of class } form 'class file path name here')
//and in this class we use that class like this
//public nameofObj: name of class = new name of class();
