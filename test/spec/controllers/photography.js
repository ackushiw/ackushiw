'use strict';

describe('Controller: PhotographyCtrl', function () {

  // load the controller's module
  beforeEach(module('ackushiwApp'));

  var PhotographyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotographyCtrl = $controller('PhotographyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
