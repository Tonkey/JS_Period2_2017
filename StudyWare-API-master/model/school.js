var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
  name: String,
  teachers: [{type: Schema.Types.ObjectId, ref: 'Teacher'}],
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
  classes: [{type: Schema.Types.ObjectId, ref: 'Class'}]
});

var Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;