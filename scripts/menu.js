function copyRight() {
	var lastModDate = document.lastModified
	var lastModDate = lastModDate.substring(0,10)
	displayCopyRight.innerHTML = "<p style='font-size:8pt; font-weight:bold;'> The URL of this document is" 
	+ document.URL+"<br />Midwest Bridal Expo"+"<br />This document was last modified" 
	+ lastModDate+ ".</p>"
}

function overButton(img)
{
	buttonImg = "./Images/pen_" + img + "_over.jpg"
	document.getElementById(img).src=buttonImg
}

function downButton(img)
{
	buttonImg = "./Images/pen_" + img + "_down.jpg"
	document.getElementById(img).src=buttonImg
}

function upButton(img)
{
	buttonImg = "./Images/pen_" + img + "_up.jpg"
	document.getElementById(img).src=buttonImg
}