
$('#envoyer').click(function(){
	var login=$('#login').val();
	var mdp=$('#mdp').val();
	console.log('click');

	 $.ajax({
	 	type:"POST",
		url:'http://192.168.1.137:3000/auth',
	 	data:{
	 		login:login,
	 		mdp:mdp,
	 	},
	 		success:function(data){
	 			alert("logged")
	 		}
	 })
	 	.done(function(data){
	 		alert("votre ordinateur s'autodétruira dans 5 sec")	
		})
		.fail(function(data) {
			alert("Erreur d'identification!");
		});
});









