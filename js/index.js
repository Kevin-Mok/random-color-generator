$(document).ready(function() {
	$("#generate").on("click", function() {
		rndClr = randomColor({
			luminosity: "dark"
		});
		document.getElementsByTagName("body")[0].style.color = rndClr;
		document.getElementsByTagName("body")[0].style.backgroundColor = rndClr;
		document.getElementById("generate").style.backgroundColor = rndClr;
		$("#quote").html(rndClr);
	});
});