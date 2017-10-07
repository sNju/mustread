let a=5;
let b=5;

let c=`adding ${a} and ${b}, ${a + b}`;
console.log(c);

//this is awesome

let tagged=function(strArray,...vals){
	console.log(strArray);
	console.log(vals);
}
tagged`adding ${a} and ${b}, ${a + b}`;

//

console.log(`hellow world`.startsWith(`hell`));//this returns true

console.log(`hellow world`.endsWith(`ld`));//this returns true

console.log(`hellow world`.includes(`ll`));//this returns true

console.log(`hellow world`.repeat(3));//this will repeat this strng three times


let raw=String.raw`Not a new line\n`;//will be print on single line
console.log(raw)
