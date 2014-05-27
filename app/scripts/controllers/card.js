'use strict';

angular.module('ackushiwApp')
  .controller('CardCtrl', function ($scope, $modal, $rootScope) {  	
  	$scope.loadImage = function(card) {
  		var imageX = card.mediaGroups[0];
  		var imageXX = imageX.contents;
  		var imageR = imageXX[0];
  		$scope.imageUrl = imageR.url;  		
  	};  	
  	
  	//Modal
  	$scope.open = function(imageUrl){
  		$rootScope.image = imageUrl;  				
  		$modal.open({
  			size: 'lg',
  			templateUrl: 'views/modal.html' 			
  			
  		});
  	};

  });




        

      