var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

/*
router.get("/test", function(req, res){
    res.sendFile(path.join(__dirname, "/public/assets/test.html"));
});
*/

router.get("/", function(req, res){
    res.render("index");
});

module.exports = router;