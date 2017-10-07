//function scoping

var foo='foo';
function bob(){
	var foo='foo2';
	console.log(foo);//foo2
}
bob();
console.log(foo);//foo

var foo='foo';
function bob(){
	console.log(foo);//foo
}
bob();
console.log(foo);//foo


var foo='foo';
function bob(){
	foo='foo5'
	console.log(foo);//foo5
}
bob();
console.log(foo);//foo5


var foo='foo';
(function bob(){
	console.log(foo);//foo5
})()
console.log(foo);//foo5


for (var i=0;i<5;i++){
	(function(){
		var j=i;
		console.log(j);
	})();
}

for (var i=0;i<5;i++){
		console.log(j);
}


//closure loop

for(i=0;i<5;i++){
	setTimeout(function(){
		console.log('i:' + i);

	},i*1000)
}

for(i=0;i<5;i++){
(function(){
	setTimeout(function(){
		console.log('i:' + i);

	},i*1000)
})(i)

}