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

  it("should divide", () => {
    result = mm.divide(20, 5);
    expect(result).to.equal(4);
  })

  it("should return 'operation not possible' when trying to divide by 0", () => {
    result = mm.divide(20, 0);
    expect(result).to.equal('operation not possible');
  })
  
  it("should return highest of 2 integers", () => {
    result = mm.highest(20, 30);
    expect(result).to.equal(30);
  })

  it("should return lowest of 2 integers", () => {
    result = mm.lowest(20, 30);
    expect(result).to.equal(20);
  })
});
