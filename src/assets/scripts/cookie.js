/* eslint-disable*/
var gee = gee || $.fn.gene;
gee.debug = true;

// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster

var dropCookie = true; // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie'; // Name of our cookie
var cookieValue = 'off'; // Value of cookie
function createDiv() {
	var bodytag = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.setAttribute('id', 'cookie-law');
	div.innerHTML = '<div class="container"> <p>We use cookies to improve your user experience and for web traffic statistics purposes. By continuing to use this website, you agree to our use of cookies. Our <a href="http://www.tsmc.com/english/privacy.htm" rel="nofollow" title="Privacy &amp; Cookies Policy">Privacy & Cookies Policy</a>. contains more information on such use and explains how to disable cookies.</p><a class="privacyBarAcceptBtn btn btn-outline-light gee" data-gene="click:removeMe" href="javascript:void(0);" ">I Accept</a></div>';

	bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

	document.getElementsByTagName('body')[0].className += ' cookiebanner';


	setTimeout(() => {
		gee.init();
	}, 100);
}

function createCookie(name, value, days) {
	if (days) {


		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		console.log(expires);
	} else {
		var expires = "";
	}

	if (dropCookie) {
		document.cookie = name + "=" + value + expires + "; path=/";
	}
}

function checkCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

window.onload = function () {
	// eraseCookie(cookieName)
	// console.log(checkCookie(cookieName));
	if (checkCookie(cookieName) != cookieValue) {
		createDiv();
	}
}

function removeMe() {
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
	createCookie(cookieName, cookieValue, cookieDuration); // Create the cookie
}

gee.hook('removeMe', function () {
	removeMe();
});
