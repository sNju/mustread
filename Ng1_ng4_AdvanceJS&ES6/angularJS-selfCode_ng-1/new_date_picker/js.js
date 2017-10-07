// var app = angular.module('myApp',[]);
// app.directive("datePicker",function(){
// 	return {
// 		restrict:'EA',
// 		link:function($scope,element,$attr){
// 			angular.element('<link rel="stylesheet" href="bootstrap-material-datetimepicker.css" />').appendTo(element);
// 			angular.element('<link href="http://fonts.googleapis.com/css?family=Roboto:400,500">').appendTo(element);
// 			angular.element('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">').appendTo(element);
// 			angular.element('<script type="text/javascript" src="https://rawgit.com/FezVrasta/bootstrap-material-design/master/dist/js/material.min.js"></script>').appendTo(element);
// 			angular.element('<script type="text/javascript" src="bootstrap-material-datetimepicker.js"></script>').appendTo(element);
// 			angular.getTestability(element).whenStable(function() {
// 				$scope.$applyAsync(function(){
// 					$('.datepicker').bootstrapMaterialDatePicker(
// 						{ weekStart : 0,
// 							time: false ,
// 							format : 'DD/MM/YYYY',
// 							minDate: new Date(),
// 							clearButton:true }
// 							);
					
// 					$('.timepicker').bootstrapMaterialDatePicker
// 					({
// 						date: false,
// 						shortTime: false,
// 						format: 'HH:mm',
// 						clearButton:true
// 					});
					
// 					$('.datetimepicker').bootstrapMaterialDatePicker
// 					({
// 						weekStart:0,
// 						shortTime:false,
// 						time:true,
// 						minDate: new Date(),
// 						date:true,
// 						format: 'DD MMMM YYYY  HH:mm',
// 						clearButton:true
// 					});




// 				});
				
// 			});
// 		} 
// 	}
// });