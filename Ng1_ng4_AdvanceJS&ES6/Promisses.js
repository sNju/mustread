let promiseToCleanTheRoom= new Promise(function(resolve,reject){

//cleaning the room

let isClean=true;

if(isClean=true){
	resolve('clean');
} else {
	reject('not clean');
}

});

promiseToCleanTheRoom.then(function(fromResolve){
console.log('the room is ' + fromResolve);

}).catch(function(fromReject){
console.log('the room is ' + fromReject);
});


// another example

let cleanRoom=function(){
	return new Promise(function(resolve,reject){
		resolve('cleaned the room');
	});
}

let removeGarbage=function(msg){
	return new Promise(function(resolve,reject){
		resolve(msg + 'remove garbage');
	});

}

let winIceream=function(msg){
	return new Promise(function(resolve,reject){
		resolve(msg + 'won iceream');
	});

}

cleanRoom().then(function(result){
return removeGarbage(result);
}).then(function(result){
return	winIceream(result);
}).then(function(result){
console.log('finished' + result);
});

//if we do this with callbalck function then we would have to nest functin within one funtion 
//we don't have to wait for run the one function and then after next there all three functin will run at the same time and provide result very cool

// also we can do like this
Promise.all([cleanRoom(),removeGarbage(),winIceream()]).then(function(){
	console.log('all finished');
})

//if we want that one of them is finished loaded then do like this
Promise.race([cleanRoom(),removeGarbage(),winIceream()]).then(function(){
	console.log('all finished');
})