/*
	@author: Caio Souza.
    @description: AngularJs Structure [ Controller ].
    @Latest changes: 11.01.2018 / 15:43. 

    @Reference: https://tableless.com.br/criando-uma-aplicacao-single-page-com-angularjs/.
    
*/

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

