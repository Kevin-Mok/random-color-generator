function rndColor() {
	return randomColor({ luminosity: "dark"	});
}

function setDirButtonHeight() {
	var height = document.getElementById("quote-box").offsetHeight;
	//console.log(height + "px");
	$('.dir-button').height(height);
}

function applyNewColor(color) {
	var match = ntc.name(color);

	document.getElementsByTagName("body")[0].style.color = color;
	document.getElementsByTagName("body")[0].style.backgroundColor = color;
	document.getElementById("generate").style.backgroundColor = color;
	$("#quote").html(match[1]);
	setDirButtonHeight();
}

function applyRandomColor() {
	color = rndColor();
	// console.log(color);
	applyNewColor(color);
}

$(document).ready(function() {
	applyRandomColor();
	$("#generate").on("click", applyRandomColor);
});
