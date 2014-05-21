'use strict';

angular.module('ackushiwApp')
  .directive('background', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the background directive');
      }
    };
  });
