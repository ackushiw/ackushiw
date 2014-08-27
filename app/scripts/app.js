'use strict';

angular.module('ackushiwApp', [
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngSanitize',
    'ui',
    'ui.bootstrap',
    'ui.router',
    'akoenig.deckgrid',
    'ngTouch',
    'ngAnimate'

  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/alexander');
    $stateProvider
      .state('alexander', {
        url: '/alexander',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('acting', {
        url: '/acting',
        templateUrl: 'views/acting.html',
        controller: 'ActingCtrl'
      })
      .state('art', {
        url: '/art',
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl'
      })
      .state('art.photography', {
        url: '/photography',
        templateUrl: 'views/photography.html',
        controller: 'PhotographyCtrl'
      })
      .state('art.modal', {
        url: '',
        onEnter: function($stateParams, $modal) {
          $modal.open({
            templateUrl: 'views/modal.html',
            controller: 'ModalCtrl',
            backdrop: 'static'
          });
        }
      });
  });
