'use strict';

describe('Controller: SpiritCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneDevApp'));

  var SpiritCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpiritCtrl = $controller('SpiritCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpiritCtrl.awesomeThings.length).toBe(3);
  });
});
