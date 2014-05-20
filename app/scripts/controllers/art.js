'use strict';

angular.module('ackushiwApp')
  .controller('ArtCtrl', function ($scope, $rootScope) { 
  	//background set 
  	$rootScope.whitewall = false;
  	$rootScope.acting = false;
  	$rootScope.art =true;
  	//source for gallery 
    $scope.feedSrc='https://picasaweb.google.com/data/feed/base/user/115943876575256176275/albumid/5400892258879674817?alt=rss&kind=photo&hl=en_US';
    });
