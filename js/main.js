var myApp = angular.module('myApp', []);

myApp.controller('meuControlador', ['$scope', '$http', function($scope, $http) {
  $http.get('js/lib/dados_taxi.json').success(function(data) {
    $scope.taxistas = data;
    $scope.taxistasOrder = 'nome';
  });
}]);
