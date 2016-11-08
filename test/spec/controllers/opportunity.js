'use strict';

describe('Controller: OpportunityCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneDevApp'));

  var OpportunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpportunityCtrl = $controller('OpportunityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpportunityCtrl.awesomeThings.length).toBe(3);
  });
});
