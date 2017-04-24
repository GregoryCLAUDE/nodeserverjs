var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var user ={

	login: "emiflogre",
	mdp: "azerty@1234"
};

app.use(express.static('nodeserver'));
//app.use('/static', express.static(__dirname + '/nodeserver'));


app.get('/auth', function(req, res){

	res.send(index.html);
});

app.listen(3000, function(){
	console.log("yipikay!")
});

app.post('/auth', function(req, res){

	res.send('logged');

});