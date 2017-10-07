var myApp = angular.module('helloworld', []);

myApp.controller('ctrl',function($scope, $q, $http){

//simply

//$scope.result=5+2;

// same thing i can do with a function

// function add(x,y){
// 	return x+y;
// }
// $scope.result=add(5,2);

// using callback funtion//but this is not asynchronous because we are using callback immediately

// function add(x,y,callback){
// callback(x + y);
// }

// add(5,5,function(result){
// 	$scope.result=result;
// })

// if we want to delay soem then we can use $timeout servise

// function add(x,y,callback){
// 	$timeout(function(){
// 		callback(x + y);		
// 	},1000)

// }

// add(5,5,function(result){
// 	add(result,5,function(result){
// 		add(result,5,function(result){
// 			$scope.result=result;
// 		})
// 	})
// })


// if we use promises we don't need callback atall we have to inject $q service

//this is simple self promise created whatever we want to do

// function add(x,y){
// 	var q=$q.defer();
// 	// code here
// 	var z=true;
// 	if(z){
// 		q.resolve(x+y);
// 	}
// 	else{
// 			q.reject('sorry wrong code');	
// 	}
// 	return q.promise;
// }

// add(6,6).then(function(result){
// 	$scope.result=result;
// }).catch(function(error){
// 	$scope.result=error;
// });


// retun an ajax request this is cool

function getDataUsingAjax(url){
	var q=$q.defer();
	$http({
		method:'GET',
		url : url
	}).then(function(result){
		q.resolve(result.data);
	},function(error){
		q.resolve(error);
	});
	return q.promise;
}

getDataUsingAjax('json.json').then(function(result){
	$scope.result=result;
}).catch(function(error){
	$scope.result=error;
});

});