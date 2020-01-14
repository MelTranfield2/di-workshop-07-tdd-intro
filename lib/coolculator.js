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
}

module.exports = Coolculator
