'use strict';

angular.module('ackushiwApp')
  .controller('DropdownCtrl', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];
  });
