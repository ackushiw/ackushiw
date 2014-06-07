'use strict';

angular.module('ackushiwApp')
    .controller('NavbarCtrl', function($scope) {
    	$scope.sidebarMenu = false;

  		$scope.sidebarToggle = function(sidebar){  		
  			if (sidebar == false){
  				$scope.sidebarMenu = true;
  			} else {
  				$scope.sidebarMenu = false;
  			}
  		};
    });