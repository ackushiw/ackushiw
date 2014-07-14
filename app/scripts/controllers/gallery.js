'use strict';

angular.module('ackushiwApp')
  .controller('GalleryCtrl', ['$scope', 'feedService',
    function($scope, Feed, $http, $rootScope, _) {
      $scope.loadFeed = function(e) {
        Feed.parseFeed($scope.feedSrc).then(function(res) {
          //$scope.feeds = res.data.responseData.feed.entries;
          var feed = res.data.responseData.feed.entries;
          var log = []
          angular.forEach(feed, function(value, key) {
            var url = value.mediaGroups[0].contents[0].url;
            console.log(url);
            this.push(url);
          }, log);
          console.log(log);
          $scope.feedJson = log;
          return log;
        });
      };
    }

  ]);
