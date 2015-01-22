// Load dependencies
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Configure app
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Basic error handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

// Define routes
app.get('/', function(req, res) {
    res.render('index');
});

// Start server
app.listen(app.get('port'), function() {
    console.log('This server be starting on ' + app.get('port'));
});