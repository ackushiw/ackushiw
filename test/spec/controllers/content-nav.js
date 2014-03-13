'use strict';

describe('Controller: ContentNavCtrl', function () {

  // load the controller's module
  beforeEach(module('ackushiwApp'));

  var ContentNavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentNavCtrl = $controller('ContentNavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
