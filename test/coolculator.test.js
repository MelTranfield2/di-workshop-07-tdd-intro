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

  it("should raise one number to the power of the second", () => {
    result = mm.raise(3, 2);
    expect(result).to.equal(9);
  })

  it("isNegative should return true if the number is negative", () => {
    result = mm.isNegative(-4);
    expect(result).to.equal(true);
  })

  it("isNegative should return false if the number is positive or zero", () => {
    result = mm.isNegative(4);
    expect(result).to.equal(false);
    result = mm.isNegative(0);
    expect(result).to.equal(false);
  })

  it("isPositive should return true if the number is positive or zero", () => {
    result = mm.isPositive(4);
    expect(result).to.equal(true);
    result = mm.isPositive(0);
    expect(result).to.equal(true);
  })

  it("isPositive should return false if the number is negative", () => {
    result = mm.isPositive(-4);
    expect(result).to.equal(false);
  })

  it("isCool should return true if number starts and ends with the same digit", () => {
    result = mm.isCool(626);
    expect(result).to.equal(true);
  })

  it("isCool should return false if number does not start and end with the same digit", () => {
    result = mm.isCool(42);
    expect(result).to.equal(false);
  })

  it("isCool should return false if number is one digit", () => {
    result = mm.isCool(2);
    expect(result).to.equal(false);
  })
});
