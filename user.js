$(document).ready(function(){
	$("#compile").click(function(){
		// document.domain = 'api.hackerearth.com';
		console.log("1");
		$.ajax({
			type: 'POST',
			url: 'http://api.hackerearth.com/code/compile/',
			data: {
				client_secret:'1a5359d8b8712bab25d8a50d35d2a323a24e6cea',
				lang: $("#lang").val(),
				source: $("#source").val(),
			},
			success: function(data){
				console.log(data);
			}
		})
	});
});