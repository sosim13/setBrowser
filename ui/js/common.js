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

/* 줌 */
var scale = 1;
 
function scaleIn() {
	alert("줌인");
	scale *= 1.25;
	zoom(scale);
}
 
function scaleOut() {
	scale /= 1.25;
	zoom(scale);
}
 
function zoom(scale) {
	var body = document.body;
	body.style.zoom = scale;  // IE
	body.style.webkitTransform = 'scale('+scale+')';  // Webkit(chrome)
	body.style.webkitTransformOrigin = '0 0';
	body.style.mozTransform = 'scale('+scale+')';  // Mozilla(firefox)
	body.style.mozTransformOrigin = '0 0';
	body.style.oTransform = 'scale('+scale+')';  // Opera
	body.style.oTransformOrigin = '0 0';
}
/* 줌 끝 */


css("body", "font-size", "30px");
css("tr, td ,th", "font-size", "30px");
css("a:link", "font-size", "20pt");
css("a:visited", "font-size", "20pt");
css("a:hover", "font-size", "20pt");