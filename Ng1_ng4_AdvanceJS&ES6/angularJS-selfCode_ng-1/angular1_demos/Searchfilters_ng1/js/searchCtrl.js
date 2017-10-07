(function(){
	var app=angular.module("searchModule");

app.controller('searchController', function($scope,$rootScope,httpService,$httpParamSerializer,$stateParams,$location){
$rootScope.getData=[];
$rootScope.keywords;
$rootScope.Limit=10;
$rootScope.Since=0;
$rootScope.Data;
$rootScope.sort;
$rootScope.category;
$scope.parameters=$stateParams.parameters;

$scope.$on('filterTodate', function(event, value) {
	debugger;
	$rootScope.Data=value;
	$rootScope.getData.length=0;
	$scope.getdata()
});

$scope.$on('sortByTrending', function(event, value) {
	debugger;
	$rootScope.sort=value;
	$rootScope.getData.length=0;
	$scope.getdata()
});

$scope.$on('performers', function(event, value) {
	debugger;
	$rootScope.category=value;
	$rootScope.getData.length=0;
	$scope.getdata()
});


$scope.getdata=function(){
				 debugger;
				var obj=new Object();
				obj.since=$rootScope.Since;
				obj.limit=$rootScope.Limit;
				if($rootScope.Data!==undefined&& $rootScope.Data!==''){
					obj.date=$rootScope.Data;
					// $rootScope.sort=undefined || null;
					$rootScope.Since=0;
				}
				if($rootScope.sort!==undefined&& $rootScope.sort!==''){

					obj.sort=$rootScope.sort;

//					$rootScope.Data=undefined || null;

					$rootScope.Since=0;
				}

				if($rootScope.category!==undefined&& $rootScope.category!==''){
					obj.category=$rootScope.category;

					//$rootScope.Data=undefined || null;
					//$rootScope.sort=undefined || null;
					$rootScope.Since=0;
				}

				var path="search?"+$httpParamSerializer(obj);
				$rootScope.keywords=path;
				$scope.$emit('getParams', path)
				var url=$rootScope.apiBaseUrl;
				url+="/search_v2/" + $rootScope.keywords;
				httpService.get(url).then(function(response){
					$scope.set=true;
					$rootScope.getData=$rootScope.getData.concat(response.data.search);

				},function(reason){

			})
	}

	$scope.getdata();
	$scope.set=true;

	$scope.loadMore = function() {
		if($scope.set){
		$scope.set=false;
		$rootScope.Since=$rootScope.Since + 10;
		$scope.getdata();
    	}
  	};
});

})();
