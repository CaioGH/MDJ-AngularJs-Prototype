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

   .when('/login', {
      templateUrl : 'views/loginView.html',
      controller  : 'LoginCtrl',
   })

   .when('/home', {
      templateUrl: 'views/homeView.html',
      controller: 'HomeCtrl',
   })

    .when('/register', {
      templateUrl: 'views/registerView.html',
      controller: 'RegisterCtrl',
   })

   .otherwise ({ redirectTo: '/' });
   
});