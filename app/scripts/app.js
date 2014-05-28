'use strict';

angular.module('ackushiwApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'akoenig.deckgrid'
  
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/acting', {
        templateUrl: 'views/acting.html',
        controller: 'ActingCtrl'
      })
      .when('/art', {
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl'
      })
      .when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
