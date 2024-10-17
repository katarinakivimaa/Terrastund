window.onload = play;

function play(){
    refresh();
    rotate();
}

var currImg = 0;
var captionText = new Array(
	"Kirju Koer Kippadi Kõpsas Koeru",
	"Yipeee.",
	"Yuppu Hipeee"
)

var adImages = new Array("images/pathfinder.gif","images/tiger.jpg","images/slideImg3.jpg");
var thisAd = 0;

function imgText() {
    thisAd++;
    if (thisAd == adImages.length) {
        thisAd = 0; 
    }
    
	document.getElementById("imgText").innerHTML = captionText[thisAd]; // muudab teksti arrayst võetud omaga id vastavalt
}

function refresh() {
    imgText();
    randomNum = Math.floor((Math.random() * adImages.length));
    document.getElementById("reload").src = adImages[randomNum];
}

function rotate() {
    imgText();
    // thisAd++;
    // if (thisAd == adImages.length) {
    //     thisAd = 0; 
    // }
    // document.getElementById("switch").src = adImages[thisAd]; // piltide id on adbanner, thisad muutuja väärtus määrab milline pilt parajasti näha on

	// document.getElementById("imgText").innerHTML = captionText[thisAd]  // muudab teksti arrayst võetud omaga id vastavalt

    document.getElementById("switch").src = adImages[thisAd]; //thisad muutuja väärtus määrab milline pilt parajasti näha on

    setTimeout("rotate()", 3*400); //ajastamine millisekundites
}


