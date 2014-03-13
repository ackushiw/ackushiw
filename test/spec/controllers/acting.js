'use strict';

describe('Controller: ActingCtrl', function () {

  // load the controller's module
  beforeEach(module('ackushiwApp'));

  var ActingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActingCtrl = $controller('ActingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
