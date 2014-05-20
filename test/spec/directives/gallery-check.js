'use strict';

describe('Directive: galleryCheck', function () {

  // load the directive's module
  beforeEach(module('ackushiwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gallery-check></gallery-check>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the galleryCheck directive');
  }));
});
