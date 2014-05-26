'use strict';

angular.module('ackushiwApp')
  .controller('CardCtrl', function ($scope) {
  	$scope.loadImage = function(contents) {
  		$scope.image = angular.fromJson(contents);
  		//$scope.details = image;
  	}    
  });
