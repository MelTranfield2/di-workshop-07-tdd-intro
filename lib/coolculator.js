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

  square(a) {
    return a * a
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

  sum(numArr) {
    return numArr.reduce((acc, num) => {
      return acc + num;
    }, 0);
  }

  multiplyArray(numArr)	{
    return numArr.reduce((acc, num) => {
      return acc * num;
    }, 1);
  }

  mean(numArr)	{
    return this.sum(numArr) / numArr.length;
  }

  factorial(a) {
    return a == 1 ? 1 : a * this.factorial(a - 1);
  }

  random(a) {
    return Math.floor(Math.random(a) * a);
  }
}

module.exports = Coolculator
