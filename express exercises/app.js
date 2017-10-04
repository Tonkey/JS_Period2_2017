var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/calculator/:operation/:n1/:n2', function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    req.root = calculatorRequest
    next()
    
})

app.get('/api/calculator/*', function(req,res){
    // console.log(req.root)
    var request= req.root.operation + ', ' + req.root.n1 + ', ' + req.root.n2
    var result;
    switch(req.root.operation){
        case 'add':
            result = req.root.n1 + req.root.n2
            break
        case 'subtract':
            result = req.root.n1 - req.root.n2
            break
        default:
            result = "This url only supports 'add' and 'subtract' operations at this point"
    }

    res.send(request + ' equals: ' + result)
})

app.listen(8080,function(){
    console.log('Server started, listening on: '+3000)
})
