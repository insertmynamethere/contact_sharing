var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
   console.log(urlParams);
})();

var fooBar = vCard.create(vCard.Version.FOUR);
fooBar.addFormattedname("Mr Foo Bar");
fooBar.addEmail("foor@bar.com", vCard.Type.HOME);
fooBar.addAddress("street", "code", "city", "country", vCard.Type.HOME);
var link = vCard.export(fooBar, "Foo Bar", false);

$(document).ready(function(){
	console.log("here");
    $(".full_name").html(
    	urlParams.first + ' ' + urlParams.last
    );
    $(".phone").html(
    	link
    );
});