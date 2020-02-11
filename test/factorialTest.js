const assert = require('assert')
// const factorial = require('../models/factorial')

function factorial(x) {
  return (x !==1)? x * factorial(x-1):1;
}

describe('multiply by itself', function(){
    it('it should return 120 when value is 5', function(){
        assert.equal(factorial(2),120);
       
    });
});

