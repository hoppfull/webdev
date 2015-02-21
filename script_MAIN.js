function Page(PAGE){
	this.isViewing = false;
	this.isLoaded = false;
	
	this.open = function(){
		if(!this.isLoaded){
			loadDocument(PAGE.file, PAGE.target);
			this.isLoaded = true;
		}
		if(!this.isViewing){
			closeAll();
			setTimeout(function(){PAGE.onOpen();}, 500);
			this.isViewing = true;
		}
	};
	
	this.close = function(){
		if(this.isViewing){
			PAGE.onClose();
			this.isViewing = false;
		}
	};
}

var page = {
	HOME:	new Page(HOME),
	WEBGL:	new Page(WEBGL),
	ABOUT:	new Page(ABOUT)
	};

function closeAll(){
	/* This function basicly closes all pages.
	 * It's called by the 'open'-function of the
	 * 'Page'-class when a new page is to be loaded.
	 * Since 'open' wont be called if already viewing
	 * the page, this function won't close a page
	 * the user is currently viewing. */
	for(var key in page){
		//Important to test this for some reason when iterating over an object:
		if(page.hasOwnProperty(key)){
			page[key].close();
		}
	}
}

function button_onmouseover(element_id){
	document.getElementById(element_id).style.transition =
		"background-color 0.1s linear 0.0s,"+
		"box-shadow 0.2s ease-in 0.1s";;
	document.getElementById(element_id).style.backgroundColor = "#ffffff";
	document.getElementById(element_id).style.boxShadow = "0px 0px 10px #b0ffb0 inset, 0px 0px 15px #b0ffb0";
}

function button_onmouseout(element_id){
	document.getElementById(element_id).style.transition =
		"background-color 0.2s linear 0.1s,"+
		"box-shadow 0.8s ease-out 0.0s";;
	document.getElementById(element_id).style.backgroundColor = "";
	document.getElementById(element_id).style.boxShadow = "";
}