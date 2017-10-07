//assign a object to other objct
let obj={};
let otherObj={name:"sanju"};
Object.assign(obj,otherObj);
console.log(obj)

//or we can do same thing like this
let oldObj={hi:'how r u'};
let newObj=Object.assign({},oldObj);
console.log(newObj);

//check this one also
let firstObj={a:'a',b:'b'};
let secondObj={c:'c',d:'d'};
Object.assign(firstObj,secondObj);
console.log(firstObj);