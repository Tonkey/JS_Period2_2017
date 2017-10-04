var express = require('express');
var router = express.Router();
var Class = require('../../model/classes');
var classInfo = require('./classes_info');

// Return All Students
router.get('/', function(req, res, next) {
    Class.find({}, function(err, classes) {
        if (err) {
            res.send({err})
        } else {
            res.send(classes);
        }
      });
  });

router.post('/', function(req, res, next) {
    var newClass = new Class({
        title: req.body.title,
        teachers: req.body.teachers,
        students: req.body.students,
        lessons: req.body.lessons,
    });

    newClass.save(function(err) {
        if (err) {
            res.send({ message: err.message})
        } else {
            res.send({ message: 'Added a new Class'});
        }
      });
});

router.use('/', classInfo)

module.exports = router;
