'use strict';

angular.module('ackushiwApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/navbar', {
        templateUrl: 'views/navbar.html',
        controller: 'NavbarCtrl'
      })
      .when('/acting', {
        templateUrl: 'views/acting.html',
        controller: 'ActingCtrl'
      })
      .when('/art', {
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
