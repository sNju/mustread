var demoApp = angular.module('demoApp', ['ui.router','ngToast','oc.lazyLoad']);

demoApp.config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
        maxNumber: 2,
        timeout:5000
    });
}]);

demoApp.config(function($stateProvider, $urlRouterProvider) {

//firstly inject this service $locationProvider

// use the HTML5 History API
// $locationProvider.html5Mode(true);//remove hash from url    

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'html/body.html',
            controller:'bodyCtrl'
        })
            
        .state('home', {
            url: '/home',
            templateUrl: 'html/home.html',
            resolve:['$ocLazyLoad',function($ocLazyLoad){
             return $ocLazyLoad.load({
                    cache:true,//if we do false then it will load on every click of home and add many files on index also.
                    files:["controller/lazyLoad.js"]
                  })
                }]
        })
        
        // nested list
        .state('home.list', {
            url: '/list',
            templateUrl: 'html/home-list.html',
            controller: function($scope) {
                $scope.abouts = ['sanjay', 'singh', 'love angularjs'];
                $scope.myDetails={
                    'what':'what are you looking for'
                }
            }
        })
        
        //nested nested nested nested nested nested nested nested nested :)
        .state('home.list.haha', {
            url: '/haha',
            template: '<h1 style="text-align:center;">nesteing is awesome</h1>',

        })

        .state('home.paragraph', {
            url: '/paragraph',
            template: 'i can do anything but not everything'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'html/about.html' },
                'columnOne@about': { template: '<h1 style="text-align:center;">this is left side column! with separate view</h1>' },
                'columnTwo@about': { 
                    templateUrl: 'html/aboutData.html',
                    controller: function($scope) {
                                $scope.message = 'test';
                                $scope.details = [
                                    {
                                        name: 'bhusss',
                                        price: 50
                                    },
                                    {
                                        name: 'hahahahaha',
                                        price: 10000
                                    },
                                    {
                                        name: 'hehehehehe',
                                        price: 20000
                                    }
                                ];
                                
                            }
                }
            }
            
        })
        .state('nested',{
            url:'/nested',
            views:{
                '':{templateUrl:'html/nested.html'},
                'nested1@nested':{
                    templateUrl:'html/nested1.html',
                    controller:function($scope){
                        $scope.link=function(){
                            alert('this is working fine');
                        }

                    }

                },
                'nested2@nested':{template:'<h1>this is awesome content from nested2 link</h1>'}
            }
        })
        .state('nested.nesteddddd',{
            url:'/nesteddddd',
            template:'<p>woooooooooooow</p>'
        })

        .state('guitar',{
             url:'/guitar',
            templateUrl:'html/guitar.html',
            controller:function($scope){
                $scope.about="this page is about guitar";
                    $scope.data=[
                    'images/1.jpeg',
                    'images/2.jpeg',
                    'images/3.jpeg',
                    'images/4.jpeg',
                    'images/5.jpeg',
                    'images/6.jpeg',
                    'images/7.jpeg',
                    'images/8.jpeg'
                    ];
            }
        })
        .state('guitar.guitarImg',{
            template:'<h1>nested link in guitar</h1>',
            url:'/guitarImage',
            controller :function($scope){
                alert('this is nested view');
            }


        })

        .state('stateParams',{
            url:'/stateParams/:a/:b',
            templateUrl:'html/stateParams.html',
            controller:function($scope,$stateParams){
                $scope.a=$stateParams.a;
                $scope.b=$stateParams.b;
                $scope.sum=$scope.a + $scope.b;
            }
        })
        
        // or
        // .state('stateParams',{
        //     url:'/stateParams/{a}/{b}',
        //     templateUrl:'stateParams.html',
        //     controller:function($scope,$stateParams){
        //         $scope.a=$stateParams.a;
        //         $scope.b=$stateParams.b;
        //         $scope.sum=$scope.a + $scope.b;
        //     }
        // })

        //if we don't want any value then use (null)

        .state('stateParamsQuery',{
            url:'/stateParamsQuery?a&b',
            templateUrl:'html/stateParams.html',
            controller:function($scope,$stateParams){
                $scope.a=$stateParams.a;
                $scope.b=$stateParams.b;
                $scope.sum=$scope.a + $scope.b;
            }
        })

        
});
