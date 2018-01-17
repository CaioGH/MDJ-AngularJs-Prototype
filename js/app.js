/*
  @author: Caio Souza.
  @description: AngularJs Structure 
*/

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(true);

   $routeProvider


     .when('/', {
      templateUrl : 'templates/indexView.html',
      controller  : 'IndexCtrl',
   })

   .when('/login', {
      templateUrl : 'templates/loginView.html',
      controller  : 'LoginCtrl',
   })

   .when('/home', {
      templateUrl: 'templates/homeView.html',
      controller: 'HomeCtrl',
      
   })

    .when('/register', {
      templateUrl: 'templates/registerView.html',
      controller: 'RegisterCtrl',
   })

   .otherwise ({ redirectTo: '/' });
   
})

app.controller('IndexCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('LoginCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('RegisterCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});



app.controller('validateLogin', function($scope, $location){
  $scope.login = function(){
     
     if($scope.username == "teste" && $scope.password)
     {
       $location.path('/home');
     }

     else
     {
       alert('Os dados informados estão incorretos!');
     }

  }
}); 