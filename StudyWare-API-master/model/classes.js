var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

// create a schema
var ClassSchema = new Schema({
  title: String,
  teachers: [{type: Schema.Types.ObjectId, ref: 'Teacher'}],
  students: [{type: Schema.Types.ObjectId, ref: 'Student' }],
  lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
});

var Class = mongoose.model('Class', ClassSchema);
module.exports = Class;