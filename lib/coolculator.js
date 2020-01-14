class Coolculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    if (b == 0) {
      return 'operation not possible'
    }
    return a / b
  }

  highest(a, b) {
    if (b > a) {
      return b
    }
    if (a > b) {
      return a
    }
  }

  lowest(a, b) {
    if (b < a) {
      return b
    }
    if (a < b) {
      return a
    }
  }

  raise(a, b) {
    return Math.pow(a, b);
  }

  isNegative(a) {
    if (a < 0) {
      return true;
    }
    return false;
  }

  isPositive(a) {
    return !this.isNegative(a);
  }

  isCool(a) {
    var str = a.toString();
    var result = false;

    if (str.length > 1 && str[0] == str[str.length - 1]) {
      result = true;
    }

    return result;
  }
}

module.exports = Coolculator
