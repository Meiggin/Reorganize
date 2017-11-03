define(['jquery'],function($){
	
	return {
		change:(function(){
			$('#submit').click(function(event) {
	console.log('as');
	/* Act on the event */
	$.ajax({
		url: 'php/login.php',
		type: 'POST',
		data: {
			username: $('#username').val(),
			password: $('#password').val()
		},
		success: function(data) {
			console.log('连接上服务器了。');
			if(data) {
				alert('密码正确。将跳转到首页');
			} else {
				$('#hide').css({
					display: 'block'
				});
				$('tab_c').css({
					display: 'none'
				});
			}
		},
		error: function() {
			console.log('未连接服务器，请检查。');
		}
	})
});
		})(),
	}
})