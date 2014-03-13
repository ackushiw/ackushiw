'use strict';

angular.module('ackushiwApp')
  .controller('ContentNavCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  .controller('DropdownCtrl', function ($scope) {
  	$scope.items = [
    	"The first choice!",
    	"And another choice for you.",
    	"but wait! A third!"
  	];	  	
  });
