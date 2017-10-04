var express = require('express');
var router = express.Router();
var Student = require('../../model/students');
var student_info = require('./student_info');

// Return All Students
router.get('/', function(req, res, next) {
    Student.find({}, function(err, students) {
        if (err) {
            res.send({err})
        } else {
            res.send(students);
        }
      });
  });

// Add New Student
router.post('/', function(req, res, next) {
    var student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
      });

    student.save(function(err) {
        if (err) {
            res.send({ message: err.message})
        } else {
            res.send({ message: 'Added a new student'});
        }
      });
});

// Creating Sub-Route GET: student/:id
router.use("/", student_info);
module.exports = router;
