// Client-side js entry point
var models = require('./models');

var pizza = new models.MenuItem({title: 'Combination Pizza', type: 'pizza'});
console.log(pizza);