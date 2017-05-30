'use strict';

angular.module('ackushiwApp')
  .controller('MainCtrl', function($scope, $rootScope) {
    $rootScope.view = 'home';
    $rootScope.image = null;
    $scope.hello = 'welcome friend, thanks for visiting and viewing the code';
  });
