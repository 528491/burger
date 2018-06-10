var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);
app.use(express.static("public"));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});