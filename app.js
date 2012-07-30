
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/routes.js')
  , util = require('util');

/**
 * Express configuration
 */

var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: '72g%5274g$fa22@haf3' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

/*
 * Routes
 */

app.get('/', routes.index);

app.get('/submit',
  function(req, res) {
    res.redirect('/submit');
  },
  routes.submit);

app.get('/register', routes.register);
app.post('/register', function(req, res) {
  var user = req.body;
  console.log(user);

  // does user already exist?
  //if(userExists(user)) {
  //  res.redirect('/login');
  //}

  // do passwords match?
  //if()

  // if success
  res.redirect('/');
});

app.get('/login', routes.login);
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  });

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

