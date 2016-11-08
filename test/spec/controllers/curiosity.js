'use strict';

describe('Controller: CuriosityCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneDevApp'));

  var CuriosityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CuriosityCtrl = $controller('CuriosityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CuriosityCtrl.awesomeThings.length).toBe(3);
  });
});
