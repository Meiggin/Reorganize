define(['jquery'],function($){
	
	return {
		change:(function(){
			
			//每个验证正则
			//验证用户名是否符合规范
			var check_name = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
			//验证密码是否符合规范
			var check_password = /^[a-zA-Z0-9_]{5,20}$/;
			//验证手机号是否符合规范
			var check_mobile = /^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
			var u_name = false;
			var u_psd = false;
			var u_psdagain = false;
			var u_mobile = false;
			var u_test = false;

			//--------得到数据
			$('#user_name').blur(function(event) {
				var name = $(this).val();
				if(check_name.test(name)){
					console.log('用户名格式正确');
					u_name = true;
				}
				else{
					console.log('用户名格式不正确');
					$('.mian_l_use_b').children('span').text('用户名格式不正确').css({color:'red'});
					$('.mian_l_use').css({borderColor:'red'});
					u_name = false;
				}
			});
			$('#user_password').blur(function(event) {
				var password = $(this).val();
				if(check_password.test(password)){
					console.log('密码格式正确');
					$('.mian_l_password_b').children('span').text('密码格式正确').css({color:'green'});
					$('.mian_l_password').css({borderColor:'green'});
					u_psd = true;
					
				}
				else{
					console.log('密码格式不正确');
					$('.mian_l_password_b').children('span').text('密码格式不正确').css({color:'red'});
					$('.mian_l_password').css({borderColor:'red'});
					u_psd = false;
				}
			});
			$('#user_passwordagain').blur(function(event) {
				if($('#user_passwordagain').val() == $('#user_password').val() && u_psd){
					console.log('密码一样');
					$('.mian_l_password2_b').children('span').text('密码一样').css({color:'green'});
					$('.mian_l_password2').css({borderColor:'green'});

					u_psdagain = true;
				}
				else{
					console.log('两次密码不一样');
					$('.mian_l_password2_b').children('span').text('密码格式不一样').css({color:'red'});
					$('.mian_l_password2').css({borderColor:'red'});
					u_psdagain =false;
				}
			});
			$('#user_mobile').blur(function(event) {
				var mobile = $(this).val();
				if(check_mobile.test(mobile)){
					console.log('手机格式正确');
					$('.mian_l_tel_b').children('span').text('手机格式正确').css({color:'green'});
					$('.mian_l_tel').css({borderColor:'green'});
					u_mobile = true;				}
					else{
						console.log('手机格式不正确');
						$('.mian_l_tel_b').children('span').text('手机格式不正确').css({color:'red'});
						$('.mian_l_tel').css({borderColor:'red'});
						u_mobile = false;
					}
				});

			//-验证码的制作
			function checkNum(){
				var str = '';
				var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				str = arr[Math.floor(Math.random()*(arr.length))]+arr[Math.floor(Math.random()*(arr.length))]+arr[Math.floor(Math.random()*(arr.length))]+arr[Math.floor(Math.random()*(arr.length))];
				return str;
			}
			$('.boximg').click(function(event) {
				$(this).text(checkNum());
			});
			$('#user_test').blur(function(event) {
				var test =$(this).val().toUpperCase();
				if(test == $('.boximg').text()){
					console.log('验证码正确');
					$('.mian_l_code_b').children('span').text('验证码正确').css({color:'green'});
					$('.mian_l_code').css({borderColor:'green'});
					u_test = true;				}
					else{
						console.log('验证码不正确');
						$('.mian_l_code_b').children('span').text('验证码不正确').css({color:'red'});
						$('.mian_l_code').css({borderColor:'red'});
						u_test = false;
					}
				});
			//------所有验证结束
		})(),
	}
})
