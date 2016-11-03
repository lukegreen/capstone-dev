'use strict';

describe('Service: curiosity', function () {

  // load the service's module
  beforeEach(module('capstoneDevApp'));

  // instantiate service
  var curiosity;
  beforeEach(inject(function (_curiosity_) {
    curiosity = _curiosity_;
  }));

  it('should do something', function () {
    expect(!!curiosity).toBe(true);
  });

});
