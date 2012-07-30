var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var User = new Schema({
    email         : { type: String, required: true, index: { unique: true, sparse: true } }
  , name          : { type: String, lowercase: true, trim: true, required: true }
  , password      : Date
  , twitterid     : Buffer  
});

User.statics.authenticate = function authenticate(email, password) {
  return this.find({email: email, password: password});
}

mongoose.model('User', User);