'use strict';

angular.module('ackushiwApp')
  .controller('CardCtrl', function ($scope) {  	
  	$scope.loadImage = function(card) {
  		var imageX = card.mediaGroups[0];
  		var imageXX = imageX.contents;
  		var imageR = imageXX[0];
  		$scope.imageY = imageR.url;  		
  	};
  });
