var express = require("express");
var app = express();
var path = require("path");
var classGitLnk = require("./public/assets/data/class_git_lnk.json");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", (process.env.PORT || 8000));

app.get("/class_git_lnk", function(req,res){
    res.send(classGitLnk);
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
