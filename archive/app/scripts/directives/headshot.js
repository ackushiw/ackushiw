'use strict';

angular.module('ackushiwApp')
  .directive('headshot', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/headshot.html',
    };
  });
