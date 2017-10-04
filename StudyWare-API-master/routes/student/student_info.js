var express = require('express');
var router = express.Router({mergeParams: true});
var Student = require('../../model/students');
var student_class = require('./student_info_classes');

// Get Specific Student
router.get('/:id', function(req, res, next) {
    Student.findById(req.params.id, function(err, user) {
        if (err || user == null) {
            res.send({message: "Couldnt find student"});
        } else {
            res.send(user);
        }
    })
});

// Update Student
router.put('/:id', function(req, res, next) {
    res.send({message: "Updating Student " + req.params.student_id})
});

// Delete Student
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Student.findOneAndRemove({ _id : id }, function(err) {
        if (err) {
            res.send({message: "Something went wrong"});
        } else {
            res.send({message: "User Deleted!"});
        }
      });
});

// Adding Sub-Route to get Student Class Info
router.use("/:id/classes", student_class);
module.exports = router;
