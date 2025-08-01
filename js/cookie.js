function setCookie(cname, cvalue, exdays, path) {
	var cpath;
    var d = new Date();
	console.log("Document.cookie: " + cname + "=" + cvalue);
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	if(path != undefined)
	{
		cpath = "path=" + path;
		document.cookie = cname + "=" + cvalue + "; " + expires + "; " + cpath;
		console.log("Document.cookie: " + cname + "=" + cvalue + "; " + expires + "; " + cpath);
	}
	else
	{
		document.cookie = cname + "=" + cvalue + "; " + expires;
		console.log("Document.cookie: " + cname + "=" + cvalue + "; " + expires + ";");
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
