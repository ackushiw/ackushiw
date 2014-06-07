'use strict';

angular.module('ackushiwApp')
  .directive('sidemenu', function () {
    return {
      restrict: 'C',
      templateUrl : 'views/sidemenu.html'
    };
  });
