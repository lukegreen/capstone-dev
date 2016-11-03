'use strict';

describe('Service: opportunity', function () {

  // load the service's module
  beforeEach(module('capstoneDevApp'));

  // instantiate service
  var opportunity;
  beforeEach(inject(function (_opportunity_) {
    opportunity = _opportunity_;
  }));

  it('should do something', function () {
    expect(!!opportunity).toBe(true);
  });

});
