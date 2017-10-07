var demoApp = angular.module('demoApp');

demoApp.controller('bodyCtrl',function($scope,ngToast){
$scope.body='body';

$scope.toast=function(){
	ngToast.create({
		  className: 'success',
		  content: '<span> this is a ng toast message</span>'
		});
	}
})
