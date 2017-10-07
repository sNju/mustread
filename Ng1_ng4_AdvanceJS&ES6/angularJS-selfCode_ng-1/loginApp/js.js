var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "body.html"//
    })
    .when("/login", {
        resolve:{
            "check":function($location,$rootScope){
                if(!$rootScope.loggedIn){
                    $location.path('/');
                }
                else{
                    console.log('right stuff');
                }
            }
        },
        templateUrl : "login.html"
    })
    .otherwise({
        redirectTo:'/'
    });

});
//services are singleton
app.service('firstService',function(){//this refers to the name of service
    var num=Math.floor(Math.random()*10);
    this.generateService=function(){
        return num;
    }
    this.name="sanju"
});
app.factory('firstFactory',function(){//this refers to the name of service
    var number=Math.floor(Math.random()*10);
    var randomObject={};
    randomObject.generateFacFunc=function(){
        return number;
    }
    randomObject.name="sanjay";
    return randomObject;
});

app.provider('firstProvider',function(){
    return {
        $get: function(){
            return {
                showDate: function(){
                    var date=new Date();
                    return date.getHours();
                }
            }
        }
    }
});
app.controller('serviceCtrl',function($scope,firstService,firstFactory,firstProvider){
  $scope.generateRandomFromService=function(){
        $scope.randomNumber=firstService.generateService();
        $scope.getName=firstService.name;
    }
    $scope.generateRandomFromFactory=function(){
        $scope.randomNumberFac=firstFactory.generateFacFunc();
        $scope.getNameFac=firstFactory.name;
    }
    $scope.getMessageFromProvider=firstProvider.showDate();
})


app.controller('loginCtrl',function($scope,$location,$rootScope){
  
    $scope.submit=function(){
        if($scope.userName == 'admin' && $scope.userPassword == 'admin'){
            $rootScope.loggedIn=true;
            $location.path('/login');
        }else{
            alert('wrong stuff');
        }
    }

//$digest //beacuse there is js code and angularjs doesn't know what need to be done
 // $scope.randomnumber=Math.random();
 //    document.querySelector('input').addEventListener('click',function(){
 //        console.log('button clicked');
 //        alert('asdf');
 //        $scope.$digest();
 //    },false);
});
app.controller('httpCtrl',function($scope, $http){
   
     $http({
        method : "GET",
        url : "json.json"})
        .then(function (response) {
          $scope.data = response.data;
        });
});


app.controller('addTask',function($scope){
        $scope.tasks=[];

        var taskData=localStorage['tasksList'];
        if(taskData !== undefined){
            $scope.tasks=JSON.parse(taskData);
        }


        $scope.searchEnter=function(){
            if(event.which == 13 && $scope.task !== ''){
                $scope.addTask();
            }
        }
        $scope.addTask=function(){
            $scope.tasks.push({'taskMessage':$scope.task,'status':false});
            console.log( $scope.tasks);
            $scope.task='';
            localStorage['tasksList']=JSON.stringify($scope.tasks);
            console.log(localStorage);

        }

        $scope.contentEdit=function(msg){
            event.target.contentEditable=event.target.contentEditable == 'false'?'true':'false';
            console.log(event.target.contentEditable);

            for(i=0;i<$scope.tasks.length;i++){
                if($scope.tasks[i].taskMessage==msg){
                    $scope.tasks[i].taskMessage=event.target.innerText;
                    console.log($scope.tasks[i].taskMessage);
                }
            }
            localStorage['tasksList']=JSON.stringify($scope.tasks);
            console.log($scope.tasks);

        }
        $scope.enterAgain=function(msg){
            if(event.which == 13 && msg !== ''){
                $scope.contentEdit(msg);
            }
        }

});
