const assert = require('assert')
// const factorial = require('../models/factorial')

function factorial(x) {
  return (x !==1)? x * factorial(x-1):1;
}

describe('multiply by itself', function(){

    it('it should return 120 when value is 5', function(){
        assert.equal(factorial(2),120);
    });

    it('factorial of 1 should be one', function() {
      assert.equal(1, factorial(1));
    });
    it('factorial of 10 should be 3628800', function() {
      assert.equal(3628800, factorial(10));
    });
    it('factorial of n should not be negative', function() {
      assert.equal(NaN, factorial(-10));
    });
    it('factorial of n should not be more than 69', function() {
      assert.equal(NaN, factorial(70));
    });

});

