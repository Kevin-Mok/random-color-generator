var colorHistory = [];
var curHistoryIndex = 0;
var alternateColorNameCounter = 0;
var documentLoaded = false;
var alternateIntervalTime = 5000;
var hideDirButtonsAfterLaunchTime = alternateIntervalTime;

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
    var color = getCurrentColor();

    document.getElementsByTagName("body")[0].style.color = color;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    document.getElementById("generate").style.backgroundColor = color;
    $("#color-name").html(getCurrentColorName());
    // $("#color-hex").html(color);
    setDirButtonHeight();
}

function applyRandomColor() {
    color = rndColor();
    // console.log(color);
    colorHistory.push(color);
    curHistoryIndex = colorHistory.length - 1;
    applyNewColor();
    alternateColorNameCounter = 0;
    resetInterval();
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

function getCurrentColor() {
    return colorHistory[curHistoryIndex];
}

function getCurrentColorName() {
    return ntc.name(getCurrentColor())[1];
}

// When counter is 0, will change text to hex.
function alternateColorName() {
    if (documentLoaded) {
        if (alternateColorNameCounter == 1) {
            $("#color-name").html(getCurrentColorName());
            alternateColorNameCounter = 0;
        } else {
            $("#color-name").html(getCurrentColor());
            alternateColorNameCounter = 1;
        }
    }
    // console.log(alternateColorNameCounter);
}
var alternateID = setInterval(alternateColorName, alternateIntervalTime);

function resetInterval() {
    clearInterval(alternateID);
    alternateID = setInterval(alternateColorName, alternateIntervalTime);
}

function hideDirButtons() {
    $(".dir-button").hide();
}

$(document).ready(function () {
    applyRandomColor();
    $("#generate").on("click", applyRandomColor);
    $(".dir-button-div")
        .on("mouseenter", function () {
            $(".dir-button").show();
        })
        .on("mouseleave", function () {
            hideDirButtons();
        });
    /*     $("#color-name")
            .on("mouseenter", function () {
                $("#color-name").html(getCurrentColor());
            })
            .on("mouseleave", function () {
                $("#color-name").html(getCurrentColorName());
            }); */
    $("#dir-button-left").on("click", applyPrevColor);
    $("#dir-button-right").on("click", applyNextColor);
    documentLoaded = true;
    setTimeout(hideDirButtons, hideDirButtonsAfterLaunchTime);
});