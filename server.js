var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var user ={

	login: "emiflogre",
	mdp: "azerty@1234"
};


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.post('/auth', function(req, res){
	var data = req.body;
	
	if(data.login === user.login && data.mdp === user.mdp) {
		//res.send("identification réussie!")
		window.location.href="myaccount.html";
		//res.redirect('/myaccount.html');
	}else {
		res.send("Erreur d'identification!")
	}

 });

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

