window.onload=rotate;
// luuakse 2 muutujat, esimene adimages koos massiiviga, teisele muutujale thisAd antakse algväärtus
var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");
var thisAd = 0;
function rotate() {
    thisAd++;
    if (thisAd == adImages.length) {
        thisAd = 0; //kui lugeja (counter) teatab, et thisad väärtus võrdub piltide arvuga adImages massiivis, siis muutub thisAd väärtus jälle 0ks
    }
    document.getElementById("adBanner").src = adImages[thisAd]; // piltide id on adbanner, thisad muutuja väärtus määrab milline pilt parajasti näha on

    setTimeout("rotate()", 3*1000); //ajastamine millisekundites
}