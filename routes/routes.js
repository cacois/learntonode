
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'LearntoNode.com' })
};

exports.submit = function(req, res){
  res.render('submit', { title: 'Submit Content to LeanToNode!' })
};

exports.register = function(req, res){
  res.render('register', { title: 'Registration Page' })
};

exports.login = function(req, res){
  res.render('login', { title: 'Login Page' })
};