var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var user ={

	login: "emiflogre",
	mdp: "azerty@1234"
};


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.post('/auth', function(req, res){
	var data = req.body;
	
	if(data.login == user.login && data.mdp == user.mdp) {
		res.send("Success!")
	}else {
		res.send("Error!")
	}

 });

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("yipikay!")
});

