//Get needed elements and store so we only iterate the DOM once
var englishButton = document.getElementById('englishButton');
var mandarinButton = document.getElementById('mandarinButton');
var guestButton = document.getElementById('guestButton');
var adminButton = document.getElementById('adminButton');
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

//jsGrid code below
