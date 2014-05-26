'use strict';

angular.module('ackushiwApp')
    .controller('GalleryCtrl', ['$scope','feedService', function ($scope,Feed, $http, $rootScope) {    
        $scope.loadFeed=function(e){ 
            Feed.parseFeed($scope.feedSrc).then(function(res){
                $scope.feeds=res.data.responseData.feed.entries;                
            });            
        };
    }]);