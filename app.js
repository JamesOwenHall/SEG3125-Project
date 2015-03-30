// Load dependencies
var express    = require('express');
var hogan      = require('hogan-express');
var favicon    = require('serve-favicon');
var path       = require('path');
var logger     = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// Configure app
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.set('layout', 'layout');
app.engine('html', hogan);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Define routes
app.get('/', function(req, res) {
    res.render('index', {
        partials: {
            navbar:     'navbar',
            footer:     'footer',
            menuModals: 'menu-modals',
            cart:       'cart'
        }});
});

app.get('/contact', function(req, res) {
    res.render('contact', {
        partials: {
            navbar:     'navbar',
            footer:     'footer'
        }});
});

app.get('/checkout', function(req, res) {
    res.render('checkout', {
        partials: {
            navbar:     'navbar',
            footer:     'footer'
        }});
});

// 404 handling
app.use(function(req, res, next) {
    var err = new Error('Not found!');
    err.status = 404;
    next(err);
});

// Basic error handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

// Start server
app.listen(app.get('port'), function() {
    console.log('This server be starting on ' + app.get('port'));
});
