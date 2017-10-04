var express = require('express');
var router = express.Router({mergeParams: true});
var Class = require('../../model/classes');
var studentClass = require('./student_info_classes');

// Return All Classes For Student
router.get('/', function(req, res, next) {
    Class.find({}, function(err, classes) {
        if (err) {
            res.send({err})
        } else {
            res.send(classes);
        }
      });
});

module.exports = router;