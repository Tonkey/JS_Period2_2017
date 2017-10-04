var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var users = require('./routes/student/students.js');
var classes = require('./routes/class/classes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

var router = express.Router();

router.get('/', function(req, res) {
    res.send({ message: 'API Base-Url' });   
});

app.use('/api', router);
app.use('/api/students', users);
app.use('/api/classes', classes);

app.listen(port);
console.log('Listening on port: ' + port);