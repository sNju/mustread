//backtick (`)
// we define string var 
let str='sanju';
let str="sanju";
let str=`sanju`;//but this is more powerfull ines6
//if we want to break a line we do like this

let str='sanju\n ' + 
'singh';

console.log(str)

//but in es 6 we use backtick and break multiple line here we don't use \n for break line this is awesome
let str=`this
is 
awesome`;
console.log(str)

//this is awesome feature also

let a=`bargali`
let b=`hi my name is ${a}, sanju ${a}`;
console.log(b);

//it also converts any other types into string types.
//we don't need to convert them like //x.toString();
let a=5;
let b=5;

let c=`adding ${a} and ${b}, ${a + b}`;
console.log(c);
