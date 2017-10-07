var demoApp = angular.module('demoApp');
demoApp.controller('headerCtrl',function($scope){
$scope.x=50;
$scope.y=50;

});

demoApp.directive('header',function(){
	return{
	templateUrl:'directive/header.html'
	}
})
