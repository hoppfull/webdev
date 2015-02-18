function home_bar(right){
	document.getElementById("bar_home").style.transition = "right 0.3s ease-in-out 0.0s";
	document.getElementById("bar_home").style.right = right;
}

function icon_opacity(element_id, opacity){
	document.getElementById(element_id).style.transition = "opacity 0.3s linear 0.0s";
	document.getElementById(element_id).style.opacity = opacity;
}

function home_page(width){
	document.getElementById("page_home").style.transition = "width 0.3s ease-in-out 0.0s";
	document.getElementById("page_home").style.width = width;
}

function barpageicon_openclose(width, icon_left, icon_right){
	home_bar(width);
	home_page(width);
	icon_opacity("icon_arrow_left", icon_left);
	icon_opacity("icon_arrow_right", icon_right);
}

var isHomeOpen = false;
function home_openclose(){
	if(isHomeOpen){
		// Close the page:
		barpageicon_openclose("0px", "1", "0");
		isHomeOpen = false;
	} else {
		// Open the page:
		barpageicon_openclose("800px", "0", "1");
		isHomeOpen = true;
		loadDocument("home_content.html", "page_home");
	}
}