var app=angular.module("myapp",["ngMaterial"]);
app.controller('searchController', ['$rootScope','$q','$scope','$http','$location','$httpParamSerializer',
	function($rootScope,$q, $scope,$http,$location,$httpParamSerializer){

		$rootScope.baseurl="http://testing.goparties.com:3000";
		$rootScope.cards = [];
		$rootScope.searchtext;



		$scope.searchobj=Object.assign({},$location.search());
		console.log('getting typed text here',$location.search());
		$scope.selectedItem=$scope.searchobj.text;


		$scope.querySearch   = querySearch;
		$scope.selectedItemChange = selectedItemChange;
		$scope.searchTextChange   = searchTextChange;

		function querySearch (query) {

			let data={};
			data.query=query;
			var defer=$q.defer();

			var url=$rootScope.baseurl+"/autocomplete?"+$httpParamSerializer(data);
				$http.get(url).then(function(response){
					defer.resolve(response.data);
				},function(reason){
					defer.reject(reason);
				});
			
			console.log('kya h ye actually', defer.promise);

			return defer.promise;

		}

		
		function searchTextChange(text) {
			$rootScope.searchtext=text;
			console.log('new text',$rootScope.searchtext);
			$rootScope.cards.length=0;

		}


		function selectedItemChange(item) {
			if(item!=undefined){
				item=item||{};
				$scope.searchobj.text=item.display;
				$scope.getDataCard();
			}
		}

		$scope.getDataCard=function(){
			var obj={};
			//obj=Object.assign({},$rootScope.searchtext);

			var addparams='/search?address=Dharuhera,Haryana,India&lat=28.2167&lon=76.7833&text='+$rootScope.searchtext;

			var url=$rootScope.baseurl+addparams;
				$http.get(url).then(function(response){
					console.log('getting data',response.data)

					$rootScope.cards =$rootScope.cards.concat(response.data.hits.hits);

					$location.path(addparams);


				},function(reason){
					console.log(reason)
				});

		}

	}]);


