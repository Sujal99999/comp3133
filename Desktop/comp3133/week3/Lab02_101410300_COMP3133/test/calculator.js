const { assert } = require("chai")
const { add, sub, mul, div } = require("../app/calculator");


describe("add", function(){
    it("adds the numbers success", function(){
        assert.equal(add(5,2), 7);
    })
})
describe("add", function(){
    it("adds the numbers failure", function(){
        assert.equal(add(5,2), 8);
    })
})

describe("sub", function(){
    it("subtracts the numbers success", function(){
        assert.equal(sub(5,2), 3);
    })
})
describe("sub", function(){
    it("subtracts the numbers failure", function(){
        assert.equal(sub(5,2), 5);
    })
})

describe("mul", function(){
    it("multiplies the numbers success", function(){
        assert.equal(mul(5,2), 10);
    })
})

describe("mul", function(){
    it("multiplies the numbers failure", function(){
        assert.equal(mul(5,2), 12);
    })
})

describe("div", function(){
    it("divides the numbers success", function(){
        assert.equal(div(10,2), 5);
    })
})

describe("div", function(){
    it("divides the numbers failure", function(){
        assert.equal(div(5,2), 8);
    })
})