var express = require('express');
var path = require('path');
var exphbs = require("express-handlebars");
var mongoose = require('mongoose');

var app = express();


var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/unit18Populater', {useNewUrlParser: true});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./controllers/apiRoutes')(app);
require('./controllers/htmlRoutes')(app);

app.listen(port, (err) => {
    if (err) throw err;
    console.log('listening on port ' + port);
})



exports.express = app;