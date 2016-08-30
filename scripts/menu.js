
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

function rndimage()
{
	rndnumsize = randomImage.length-1
	var randomnumber = Math.ceil(Math.random()*rndnumsize)
	document.getElementById("dailyImage").src=randomImage[randomnumber]
}