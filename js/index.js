function rndColor() {
	return randomColor({ luminosity: "dark"	});
}

function applyNewColor(color) {
	document.getElementsByTagName("body")[0].style.color = color;
	document.getElementsByTagName("body")[0].style.backgroundColor = color;
	document.getElementById("generate").style.backgroundColor = color;
	$("#quote").html(color);
}

function applyRandomColor() {
	color = rndColor();
	applyNewColor(color);
}

$(document).ready(function() {
	applyRandomColor();
	$("#generate").on("click", applyRandomColor);
});
