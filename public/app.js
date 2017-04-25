
$('#envoyer').click(function(){
	var login=$('#login').val();
	var mdp=$('#mdp').val();
	//console.log('click');

	 $.ajax({
	 	type:"POST",
		url:'http://192.168.1.137:3000/auth',
	 	data:{
	 		login:login,
	 		mdp:mdp,
	 	},
	 		success:function(data){
	 			//alert("logged")
	 		}
	 })
	 	.done(function(data){
	 		console.log(data)
	 		if (data == "Success!"){
	 			$("#statut").append(data);
	 		} else{
	 			$("#erreur").append(data);
		}})
		// .fail(function(data) {
		// 	alert("Erreur d'identification!");
		// });
});









