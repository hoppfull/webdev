var xmlHttp = new XMLHttpRequest();

function loadDocument(url, pageElement){
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
			document.getElementById(pageElement).innerHTML = xmlHttp.responseText;
		}
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}