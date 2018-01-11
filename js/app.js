var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   .when('/login', {
      templateUrl : 'View/loginView.html',
      controller  : 'LoginCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/home', {
      templateUrl: 'View/homeView.html',
      controller: 'HomeCtrl',
   })

    .when('/register', {
      templateUrl: 'View/registerView.html',
      controller: 'RegisterCtrl',
   })


   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});