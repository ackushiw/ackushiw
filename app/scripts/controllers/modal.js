'use strict';

angular.module('ackushiwApp')
  .controller('ModalCtrl', function($scope, $modal) {

    $scope.cancel = function() {
      $modalInstance.open('cancel');
    };
  });
