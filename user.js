$(document).ready(function(){
	$("#compile").click(function(){
		// document.domain = 'api.hackerearth.com';
		console.log("1");
		$.ajax({
			type: 'POST',
			url: '/post.php',
			data: {
				client_secret:'****',    //add your client secret here for testing
				lang: $("#lang").val(),
				source: $("#source").val(),
			},
			success: function(data){
				console.log(data);
			}
		})
	});
});
