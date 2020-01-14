var chai = require("chai");
var expect = chai.expect;

var Coolculator = require("../lib/coolculator");

describe("Coolculator", function() {
  mm = new Coolculator();

  it("should add", () => {
    result = mm.add(2, 3);
    expect(result).to.equal(5);
  });

  it("should multiply", () => {
    result = mm.multiply(2, 3);
    expect(result).to.equal(6);
  });

  it("should subtract", () => {
    result = mm.subtract(3, 2);
    expect(result).to.equal(1);
  });
});
