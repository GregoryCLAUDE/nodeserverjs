var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var user ={

	login: "emiflogre",
	mdp: "azerty@1234"
};


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodypaser.json());



app.post('/auth', function(req, res){
	var data = req.body;
	//verifier avec un if

 });

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

