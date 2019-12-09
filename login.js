//Get needed elements and store so we only iterate the DOM once
var englishButton = document.getElementById('englishButton');
var mandarinButton = document.getElementById('mandarinButton');
// var guestButton = document.getElementById('guestButton');
// var adminButton = document.getElementById('adminButton');
var curLang = document.getElementById('curLang');
var curLoginType = document.getElementById('curLoginType');
var curFlag = document.getElementById('curFlag');
var username = document.getElementById('loginUsername');
var password = document.getElementById('loginPassword');
var login = document.getElementById('loginButton');
var background = document.getElementById('backgroundImg');
var body = document.body;
var html = document.documentElement;

//Set our background image in the center of the screen
var centerBackgroundImg = function() {
	var pageWidth = Math.max( body.scrollWidth, 
			       body.offsetWidth, 
			       html.clientWidth, 
			       html.scrollWidth, 
			       html.offsetWidth );
	if(pageWidth < 600) {
		background.src = '../images/mistGolfMobile.jpg';
	}else {
		background.src = '../images/mistGolfThin.jpg';
	}
	var backgroundWidth = background.offsetWidth;
	background.style.marginLeft = ((pageWidth - backgroundWidth)  / 2) + 'px'; 

	var backgroundHeight = background.offsetHeight;
	var pageHeight = Math.max( body.scrollHeight, 
			       body.offsetHeight, 
			       html.clientHeight, 
			       html.scrollHeight, 
			       html.offsetHeight );
	background.style.marginTop = ((pageHeight - backgroundHeight)  / 2) + 'px'; 
}

//On page load center our background image
window.addEventListener('load', centerBackgroundImg);

//On page resize center our background image
window.addEventListener('resize',centerBackgroundImg);

englishButton.addEventListener('click',function() {
	curFlag.src = '../images/usaFlag.png';
	curLang.innerHTML = 'English';
	username.placeholder = 'Enter Username';
	password.placeholder = 'Enter Password';
	login.innerHTML = 'Login';
	langSelectFunc();
	if(curLoginType.innerHTML === '管理员') {
		curLoginType.innerHTML = 'Admin';
	} 
	// else if (curLoginType.innerHTML === '来宾') {
	// 	curLoginType.innerHTML = 'Guest';
	// } 
	// guestButton.innerHTML = 'Guest';
	// adminButton.innerHTML = 'Admin';
});

mandarinButton.addEventListener('click',function() {
	curFlag.src = '../images/chinaFlag.png';
	curLang.innerHTML = '中文';
	username.placeholder = '用户名';
	password.placeholder = '密码';
	login.innerHTML = '登录';
	langSelectFunc();
	if(curLoginType.innerHTML === 'Admin') {
		curLoginType.innerHTML = '管理员';
	} 
	// else if (curLoginType.innerHTML === 'Guest') {
	// 	curLoginType.innerHTML = '来宾';
	// }
	// guestButton.innerHTML = '来宾';
	// adminButton.innerHTML = '管理员';
	//will also need to change guest/admin to mandarin
});

//guestButton.addEventListener('click',function() {
//	//need to check current language and adjust accordingly
//	if(curLoginType.innerHTML === 'Admin') {
//		curLoginType.innerHTML = 'Guest';
//	} 
//	else if (curLoginType.innerHTML === '管理员') {
//		curLoginType.innerHTML = '来宾';
//	} 
//	//need business logic to send to different php page
//});

// adminButton.addEventListener('click',function() {
// 	if(curLoginType.innerHTML === 'Guest') {
// 		curLoginType.innerHTML = 'Admin';
// 	} 
// 	else if(curLoginType.innerHTML === '来宾') {
// 		curLoginType.innerHTML = '管理员';
// 	}
// });

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function langSelectFunc() {
  document.getElementById("langDropdown").classList.toggle("show");
}

// function loginTypeFunc() {
//   document.getElementById("loginTypeDropdown").classList.toggle("show");
// }

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn.loginType')) {
		// var loginTypeDropdown = document.getElementById("loginTypeDropdown");
		var langDropdown = document.getElementById("langDropdown");
		// if (loginTypeDropdown.classList.contains('show')) {
		// 	loginTypeDropdown.classList.remove('show');
		// }
		if (!e.target.matches('.dropbtn')) {
			if (langDropdown.classList.contains('show')) {
				langDropdown.classList.remove('show');
			}
		}
	}
	else {
		var langDropdown = document.getElementById("langDropdown");
		if (langDropdown.classList.contains('show')) {
			langDropdown.classList.remove('show');
		}
	}
}
