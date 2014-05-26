'use strict';

angular.module('ackushiwApp')
  .controller('CardCtrl', function ($scope, $modal, $log) {  	
  	$scope.loadImage = function(card) {
  		var imageX = card.mediaGroups[0];
  		var imageXX = imageX.contents;
  		var imageR = imageXX[0];
  		$scope.imageUrl = imageR.url;  		
  	};
  	$scope.open = function (imageUrl) {

    	var modalInstance = $modal.open({
      		templateUrl: 'views/modal.html',
      		controller: 'ModalCtrl',      		
      		resolve: {
        		imgUrl: function () {
          		return imageUrl;
        		}
      		}
    	});
    	modalInstance.result.then(function(selectedItem) {
    		$scope.selected = selectedItem;
    	}, function() {
           $log.info('Modal dismissed at: ' + new Date());
        });
    };

  });




        

      