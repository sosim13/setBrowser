function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

css("div#con_head1", "font-size", "40px");
css("div#pmemo_cont", "font-size", "40px");
css("div#con_text", "font-size", "40px");
css("div#login_head", "font-size", "40px");
css("font#rep", "font-size", "40px");
css("table.reply_box td#rp_right", "font-size", "40px");
css("div#con_says", "font-size", "40px");
css("font.reply_id", "font-size", "40px");
css("a:link", "font-size", "18pt");