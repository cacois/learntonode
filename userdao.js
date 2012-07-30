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