'use strict';

angular.module('ackushiwApp')
    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
        };
    });
