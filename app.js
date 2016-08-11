var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('myController', ['$scope', function($scope){
	$scope.view = {};
	$scope.view.num = 9;
}])
