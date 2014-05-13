'use strict';

describe('Directive: artGallery', function () {

  // load the directive's module
  beforeEach(module('ackushiwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<art-gallery></art-gallery>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the artGallery directive');
  }));
});
