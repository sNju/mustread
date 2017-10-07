var myApp = angular.module("myApp",[]);

myApp.controller("accountCnt",function($scope) {

	$scope.accountBal= 0;

	$scope.active = function(){

		$scope.$on("amountDeposited",function(event,data){

			// $scope.accountBal += $scope.data.amount;

				$scope.accountBal += $scope.$eval(data.amount);

		});

		$scope.$on("amountWithdrawn",function(event,data) {

			if ($scope.accountBal - $scope.$eval(data.amount) < 0) {

				// if ($scope.accountBal - $scope.data.amount < 0) {

				$scope.$broadcast("withDrawlNotAllowed",{balance:$scope.accountBal})

			} else {

					// $scope.accountBal -= $scope.data.amount;

				$scope.accountBal -= $scope.$eval(data.amount);

			}

		})

	}

	$scope.active();

}); 





 myApp.controller("depositCntrl",function($scope) {

 	$scope.amount = '';

 	$scope.deposit = function() {

if($scope.amount=='' || $scope.amount == undefined){
	alert('please enter value');
} 		
else{
 		$scope.$emit("amountDeposited",{amount:$scope.amount});

 			$scope.amount = '';
}
 	}

 });



 myApp.controller("withdrawCntrl",function($scope) {

 	$scope.amount = '';

 	$scope.validationError = "";

 	$scope.active = function () {

 		$scope.$on("withDrawlNotAllowed",function (event,data) {

 			$scope.validationError = "u cant withdraw more than $" + data.balance;

 		})

 	};

 	$scope.active();

 	$scope.withdraw = function() {

 		$scope.validationError = "";

if($scope.amount=='' || $scope.amount == undefined){
	alert('please enter value');
} 		
else{	 		


 		$scope.$emit("amountWithdrawn",{amount:$scope.amount});

 		$scope.amount = '';

}
 	}

 })