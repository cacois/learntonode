var dburl = 'localhost/learntonode';
var collections = ["users"];
var db = require('mongojs').connect(dburl, collections);

module.exports = {
  
  findById: function (id) {
    // implement me
  },
  
  findByEmail: function (email) {
    // implement me
  },

  save: function (user) {
    // implement me
  },

  authenticate: function(email, password) {
    // implement me
  }

  new: function(email, name, password, twitterid, githubid) {
    return new User(email, name, password, twitterid, githubid)
  }
}

var crypto = require('utils/crypto.js')

function User(email,name,password,twitterid, githubid) {
  this.email = email;
  this.name = name;
  this.password = crypto.sha1(password);
  this.twitterid = twitterid;
  this.githubid = githubid;
}

/* Data Model

function user() {
  this.email = "";
  this.name = "";
  this.password = "";
  this.twitterid= "";
  this.githubid= "";
}

*/