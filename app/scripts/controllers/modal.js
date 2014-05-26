'use strict';

angular.module('ackushiwApp')
    .controller('ModalCtrl', function ($scope, $modalInstance) {

 

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};