'use strict';

describe('Service: spirit', function () {

  // load the service's module
  beforeEach(module('capstoneDevApp'));

  // instantiate service
  var spirit;
  beforeEach(inject(function (_spirit_) {
    spirit = _spirit_;
  }));

  it('should do something', function () {
    expect(!!spirit).toBe(true);
  });

});
