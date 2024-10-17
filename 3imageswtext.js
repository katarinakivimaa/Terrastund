window.onload = rotate;

var currImg = 0;
var captionText = new Array(
	"Kirju Koer Kippadi Kõpsas Koeru",
	"Yipeee.",
	"Yuppu Hipeee"
)

var adImages = new Array("images/pathfinder.gif","images/surveyor.gif","images/slideImg3.jpg");
var thisAd = 0;


function rotate() {
    thisAd++;
    if (thisAd == adImages.length) {
        thisAd = 0; 
    }
    document.getElementById("switch").src = adImages[thisAd]; // piltide id on adbanner, thisad muutuja väärtus määrab milline pilt parajasti näha on

	document.getElementById("imgText").innerHTML = captionText[thisAd]  // muudab teksti arrayst võetud omaga id vastavalt

    setTimeout("rotate()", 3*800); //ajastamine millisekundites
}