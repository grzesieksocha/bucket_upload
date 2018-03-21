let credentials = require('../config/config.json')

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    user = credentials.user;
    password = credentials.password;

    expect(user).toEqual('admin');
    expect(password).toEqual('abcde');
  });
});