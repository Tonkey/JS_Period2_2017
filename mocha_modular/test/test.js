var expect = require('chai').expect
var fs = require('fs')
var module = require('../lib/module.js')


describe('testing async behaviour',function(){
    before(function(done){
        fs.mkdirSync('module_test_dir')
        fs.writeFileSync('module_test_dir/testFile1.nmo')
        fs.writeFileSync('module_test_dir/testFile2.nmo')
        fs.writeFileSync('module_test_dir/testFile3.nmo')
        done()
    })

    describe('#module()',function(){
        it('should read directory without error, and have a list.length of 3(amount of mock files created)', function(done){
            module('module_test_dir', 'nmo', function(err,list){
                if(err) done(err)
                else {
                    expect(list.length).to.equal(3)
                    done()
                }
            })
        })
    })
    after(function(done){
        fs.unlinkSync('module_test_dir/testFile1.nmo')
        fs.unlinkSync('module_test_dir/testFile2.nmo')
        fs.unlinkSync('module_test_dir/testFile3.nmo')
        fs.rmdirSync('module_test_dir')
        done()
    })
})