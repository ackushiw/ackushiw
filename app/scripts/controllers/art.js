'use strict';

angular.module('ackushiwApp')
  .controller('ArtCtrl', ['$scope','feedService', function ($scope,Feed) {   
    var feedSrc='https://picasaweb.google.com/data/feed/base/user/115943876575256176275/albumid/5400892258879674817?alt=rss&kind=photo&hl=en_US';
    $scope.init=function(){        
        Feed.parseFeed($scope.feedSrc).then(function(res){
            $scope.feeds=res.data.responseData.feed.entries;
        });
    }
}]);
