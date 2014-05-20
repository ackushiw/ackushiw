'use strict';

angular.module('ackushiwApp')
    .controller('MainCtrl', function($scope, $rootScope) {
    	$rootScope.whitewall = true;
    	$rootScope.acting = false;
    	$rootScope.art = false;
    	$scope.hello = 'welcome friend, thanks for visiting and viewing the code'
    });