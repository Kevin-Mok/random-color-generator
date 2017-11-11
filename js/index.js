var colorHistory = [];
var curHistoryIndex = 0;

function rndColor() {
    return randomColor({
        luminosity: "dark"
    });
}

function setDirButtonHeight() {
    var height = document.getElementById("quote-box").offsetHeight;
    //console.log(height + "px");
    $('.dir-button-div').height(height);
}

function applyNewColor() {
    var color = colorHistory[curHistoryIndex];
    var match = ntc.name(color);

    document.getElementsByTagName("body")[0].style.color = color;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    document.getElementById("generate").style.backgroundColor = color;
    $("#color-name").html(match[1]);
    setDirButtonHeight();
}

function applyRandomColor() {
    color = rndColor();
    // console.log(color);
    colorHistory.push(color);
    curHistoryIndex = colorHistory.length - 1;
    applyNewColor();
}

function applyPrevColor() {
    if (curHistoryIndex > 0) {
        curHistoryIndex--;
    }
    applyNewColor();
}

function applyNextColor() {
    if (curHistoryIndex < colorHistory.length - 1) {
        curHistoryIndex++;
    }
    applyNewColor();
}

$(document).ready(function () {
    applyRandomColor();
    $("#generate").on("click", applyRandomColor);
    $(".dir-button-div")
        .on("mouseenter", function () {
            $(".dir-button").show();
        })
        .on("mouseleave", function () {
            $(".dir-button").hide();
        });
    $("#dir-button-left").on("click", applyPrevColor);
    $("#dir-button-right").on("click", applyNextColor);
});
