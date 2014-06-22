var myApp = angular.module('myApp', []);

myApp.controller('meuControlador', ['$scope', '$http', function($scope, $http) {
  $http.get('js/lib/dados_taxi.json').success(function(data) {
    $scope.taxistas = data;
    $scope.taxistasOrder = 'nome';
  });
}]);

//img 
function facehover() {
  document.querySelector('#minha_imagem').src = "img/facebook_hover.png";
}
function faceout() {
  document.querySelector('#minha_imagem').src = "img/facebook_norm.png";
}
function instahover() {
  document.querySelector('#minha_imagem_pri').src = "img/instagram_hover.png";
}
function instaout() {
  document.querySelector('#minha_imagem_pri').src = "img/instagram_norm.png";
}
function twithover() {
  document.querySelector('#minha_imagem_sec').src = "img/twitter_hover.png";
}
function twitout() {
  document.querySelector('#minha_imagem_sec').src = "img/twitter_norm.png";
}
//over   