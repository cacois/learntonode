var StatusEnum = require('enums').StatusEnum;
var ActivityEnum = require('enums').ActivityEnum;

var dburl = 'localhost/learntonode';
var collections = ["posts"];
var db = require('mongojs').connect(dburl, collections);

module.exports = {
  
  findById: function (id) {
    // implement me
  },
  
  findBySubmitterEmail: function (email) {
    // implement me
  },

  save: function (post) {
    // implement me
  }

}

/*

function post() {
  this.title = "";
  this.url = "";
  this.imagepath = "";
  this.desc = "";
  this.tags = [];
  this.submittedUser = "";
  this.status = StatusEnum.SUBMITTED;
  this.active = ActivityEnum.ACTIVE;
  this.featured = "false";
}

*/