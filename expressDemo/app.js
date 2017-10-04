var favicon = require('serve-favicon')
var logger = require('morgan')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./routes/index')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('dev'))
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
// app.get('/', function(req, res){
//     res.render('index', {title: 'Express'})
// })
// app.listen(3000)
var names = []
// app.get('/form', function(req,res){
//     res.send("Hi: " + names.join(',') + "<form method='post'><input name='name'></form>")
// })
app.get('/form', function(req,res){
    res.render('form',{names: names.join(', ')})
})


app.post('/form', function (req,res){
    names.push(req.body.name)
    res.redirect('/form')
})
app.post('/names', function(req,res){
    names.push(req.body)
    console.log(JSON.stringify(req.body))
    res.redirect('/form')
})

app.use(function(req,res,next){
    var err = new Error('not found')
    next(err)
})
//prints stacktrace
if(app.get('env') === 'development') {
    
    app.use(function(err,req,res,next){
        res.status(err.status || 500)
        // res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>")
        res.render('index')
    })
}
//Does not print stacktrace
app.use(function(err,req,res,next) {
    res.status(err.status || 500)
    // res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>")
    res.render('index')
})

module.exports = app