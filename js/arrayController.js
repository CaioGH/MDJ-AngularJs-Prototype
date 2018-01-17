/*
    @author: Caio Souza.
    @description: Script to array.
*/
 
 function nameList($scope) 
{
    $scope.list = [
        {name: 'Caio'},
        {name: 'Renata'},
        {name: 'Mário'}
    ];

    $scope.addName = function()
    {
      $scope.list.push({name: $scope.itemList.name});
      $scope.itemList.name = '';   	
    }
}