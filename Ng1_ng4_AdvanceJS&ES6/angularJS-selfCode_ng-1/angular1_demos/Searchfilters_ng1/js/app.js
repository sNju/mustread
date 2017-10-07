var app = angular.module('searchModule', ['ui.router']);


app.controller('head',function($scope,$rootScope,httpService,$httpParamSerializer,$location){
$rootScope.parms = 'serach';

$scope.$on('getParams', function(event, value) {
debugger;
    $rootScope.parms = value;
    $location.path($rootScope.parms);
});

$scope.converttwodigit=function(num){
      return num<10?'0'+num:num;
}

$scope.getDataOfDay=function(day){
debugger;
      var date=new Date();
      date.setDate(date.getDate()+day);
      date=$scope.converttwodigit(date.getMonth()+1)+"/"+$scope.converttwodigit(date.getDate())+"/"+date.getFullYear();
      timestamp=new Date(date).getTime();
      if(timestamp!=undefined&&timestamp!=""){
        $scope.date=parseInt(timestamp);
      }
debugger;
      $scope.$broadcast('filterTodate', $scope.date);   
}

$scope.searchByTrending=function(sortBy){
debugger
      $scope.sort=sortBy;
      $scope.$broadcast('sortByTrending', $scope.sort);   
}

$scope.Performers=function(Performers){
debugger
    $scope.category=Performers;
    $scope.$broadcast('performers', $scope.category);
  }

})


app.config(function($stateProvider, $urlRouterProvider) {

//    $urlRouterProvider.otherwise('');
    
    $stateProvider
        .state('search', {
            url: 'search/:parameters',
            templateUrl: 'html/body.html',
            controller:'searchController'
        })
});

app.run(function($rootScope){
    
    $rootScope.apiBaseUrl="http://testing.goparties.com";

    $rootScope.parms;

});


app.factory("httpService",function($http,$rootScope,$q){
        var obj=new Object();

        obj.get=function(url,data){
            var defer=$q.defer();
            $http.get(url).then(function(response){
                if(response!=undefined&&response.data!=undefined)
                    defer.resolve(response.data);
                else{
                    defer.reject("something went wrong");
                }
            },function(reason){
                defer.reject(reason);
            })
            return defer.promise;
        }

        return obj;

});


app.directive('infiniteScroll', function($window,$rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

     var Element = element[0];

      var checkScrollAndLoad = function() {

          var x=((window.innerHeight + window.scrollY) === document.body.offsetHeight);

          if(x)
          {
            console.log('found');
                        
            return scope.$apply(attr.infiniteScroll);

          }
          else{
            console.log('not found');
            return false;
          }
      };

      angular.element($window).on('scroll', checkScrollAndLoad);

      scope.$on('$destroy', function() {
        return angular.element($window).off('scroll', checkScrollAndLoad);
      });
      
    }

  };

});
