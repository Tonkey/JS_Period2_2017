var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

var LessonSchema = new Schema({
  title: String,
  description: String,
  date: Date,
});

var Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;