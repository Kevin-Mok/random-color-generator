function rndColor() {
	return randomColor({ luminosity: "dark"	});
}

function applyNewColor(color) {
	var match = ntc.name(color);

	document.getElementsByTagName("body")[0].style.color = color;
	document.getElementsByTagName("body")[0].style.backgroundColor = color;
	document.getElementById("generate").style.backgroundColor = color;
	$("#quote").html(match[1]);
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
