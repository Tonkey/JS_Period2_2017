var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  _id: { type: Schema.ObjectId, auto: true },
  firstname: String,
  lastname: String,
  username: String,
  password: String
});

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;