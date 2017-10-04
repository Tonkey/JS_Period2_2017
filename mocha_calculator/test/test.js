var expect = require('chai').expect
var assert = require('chai').assert


describe('Calculator',function(){
        var divide = null

        before(function(done){
            divide = function(x,y){
                if (x !== 0 & y !== 0) {
                    return x / y
                } else {
                    throw Error('Attempt to divide by zero')
                }
            }
            done()
        })

        describe('#divide()', function(){
            it('should throw an error upon recieveng a value of 0', function(){
                expect(()=>divide(0,2)).to.throw('Attempt to divide by zero')
            })
            it('should return the result of x/y upon recieving a valid input', function(){
                expect(divide(10,10)).to.equal(1)
            })
        })

})