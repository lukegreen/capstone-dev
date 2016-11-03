'use strict';

describe('Controller: ManifestCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneDevApp'));

  var ManifestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManifestCtrl = $controller('ManifestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManifestCtrl.awesomeThings.length).toBe(3);
  });
});
