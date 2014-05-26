'use strict';

angular.module('ackushiwApp')
  .directive('modal', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the modal directive');
      }
    };
  });
