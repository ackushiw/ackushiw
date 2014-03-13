'use strict';

describe('Controller: ArtCtrl', function () {

  // load the controller's module
  beforeEach(module('ackushiwApp'));

  var ArtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtCtrl = $controller('ArtCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
