'use strict';

angular.module('ackushiwApp')
    .directive('contentNav', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/content-nav.html',
        };
    });