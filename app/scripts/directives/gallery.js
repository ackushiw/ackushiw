'use strict';

angular.module('ackushiwApp')
  .directive('artGallery', function () {
    return {      
      restrict: 'C',   
      templateUrl: 'views/gallery.html'   
    };
  });
  
