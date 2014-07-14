'use strict';

angular.module('ackushiwApp')
  .controller('ModalCtrl', function($scope, $modalInstance, $state) {
    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
      $state.go('art');
    };
  });
