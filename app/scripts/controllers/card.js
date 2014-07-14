'use strict';

angular.module('ackushiwApp')
  .controller('CardCtrl', function($scope, $modal, $rootScope) {
    $scope.animateImage = false;
    $scope.loadImage = function(card) {
      $scope.imageUrl = card;
    };

    //Image Expand
    $scope.expandImage = function(imgClass) {
      if (imgClass === false) {
        $scope.animateImage = true;
      } else {
        $scope.animateImage = false;
      }
    };

    //Modal
    $scope.open = function(imageUrl) {
      $rootScope.image = imageUrl;
      $modal.open({
        size: 'lg',
        templateUrl: 'views/modal.html'

      });
    };

  });
