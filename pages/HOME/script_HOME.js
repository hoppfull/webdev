var HOME = { //Here we store all properties and functions specifically used by home page
	file: "./pages/HOME/content_HOME.html",
	target: "content_HOME",
	
	onOpen: function(){ //Run when page is opening:
		document.getElementById(HOME_CSS.body).style.transition =
			"opacity 0.1s ease-in 0.0s, " +
			"height 0.3s ease-in-out 0.0s";
		document.getElementById(HOME_CSS.body).style.opacity = "1";
		document.getElementById(HOME_CSS.body).style.height = "100%";
	},
	
	onClose: function(){ //Run when page is closing:
		document.getElementById(HOME_CSS.body).style.transition =
			"opacity 0.5s ease-out 0.0s, " +
			"height 0.0s linear 0.5s";
		document.getElementById(HOME_CSS.body).style.height = "";
		document.getElementById(HOME_CSS.body).style.opacity = "";
	}
};

var HOME_CSS = {
	body:		"content_HOME_body"
};