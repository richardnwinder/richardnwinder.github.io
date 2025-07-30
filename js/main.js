function openHelp(page) {
	var helpwindow = window.open(page,"WinRes-Help","width=400,height=600");
}

function openSnippet(page) {
	var snippetwindow = window.open(page,"_blank");
}

function viewSnippet(page) {
	var snippetwindow = window.open(page,"WinRes-Snippet","menubar=yes,location=yes,titlebar=yes,toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=600");
}

function openSettings()
{
	console.log("openSettings().....................");

	currentCountry = "";
	currentLanguage = "";

	host = window.location.href;
  host = host.substr(0, host.lastIndexOf("/"));
  console.log("host = (" + host + ")");


	console.log(document.cookie);
	currentCountry = getCookie("index-country");
	currentLanguage = getCookie("index-language");

	console.log("getCookie(index-country) = " + currentCountry);
	console.log("getCookie(index-language) = " + currentLanguage);

	if(currentCountry == null) currenrCountry = "";
	if(currentLanguage == null) currenrLanguage = "";

	if(currentCountry == "")
	{
		$.get("https://ipinfo.io", {}, function(response) {
				console.log(response.ip, response.country);
				switch(response.country)
				{
					case "FR": currentCountry = "France"; currentLanguage = "fr"; break;
					case "GB": currentCountry = "UK"; currentLanguage = "en"; break;
					default: currentCountry = "UK"
				}
				setCookie("index-country", currentCountry, 365, "/");
				setCookie("index-language", currentLanguage, 365, "/");
        updateLanguage();
				/*$("#passwordlog").keypress(function(e)
				{
					if(e.which == 13) formLogin_submit();
				});*/
			}, "jsonp")
			.fail(function() {
				currentCountry = "UK"
				currentLanguage = "en"
				setCookie("index-country", currentCountry, 365, "/");
				setCookie("index-language", currentLanguage, 365, "/");
        updateLanguage();
      });
	}
	else
	{
		updateLanguage();
	}
}

function saveSettings()
{

}
function selectLanguage()
{
	var lang = document.getElementById("selectlang").value;
	console.log("......lang = " + lang);
	currentLanguage = lang;
	setCookie("index-language", currentLanguage, 365, "/");
	updateLanguage();
}

function updateLanguage()
{
	var cl = currentLanguage;
	var data;

		if(cl == "fr")
		{
			data = "<img class=\"flag flag-fr\"><select class=\"flag\" id=\"selectlang\" onchange=\"selectLanguage()\"><option value=\"en\">English</option><option value=\"fr\" selected>French</option><option value=\"ge\">German</option></select><br>";
			$('#language-mobile').html(data);
			$('#language-desktop').html(data);
		}
		else if(cl == "ge")
		{
			data = "<img class=\"flag flag-de\"><select class=\"flag\" id=\"selectlang\" onchange=\"selectLanguage()\"><option value=\"en\">English</option><option value=\"fr\">French</option><option value=\"ge\" selected>German</option></select><br>";
			$('#language-mobile').html(data);
			$('#language-desktop').html(data);
		}
		else
		{
			data = "<img class=\"flag flag-gb\"><select class=\"flag\" id=\"selectlang\" onchange=\"selectLanguage()\"><option value=\"en\" selected>English</option><option value=\"fr\">French</option><option value=\"ge\">German</option></select><br>";
			$('#language-mobile').html(data);
			$('#language-desktop').html(data);
		}

}
