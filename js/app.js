/*
   @author: Caio Souza.
    @description: AngularJs Structure [ App ].
    @Latest changes: 11.01.2018 / 15:45. 

    @Reference: https://tableless.com.br/criando-uma-aplicacao-single-page-com-angularjs/.    
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

