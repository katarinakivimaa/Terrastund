document.onkeydown = keyhit; //onkeydown sündmus (event)
var thisPic = 0;

function keyHit(evt) {
    var myPix = new Array("images/surveyor.gif","images/tiger.jpg","images/pathfinder.gif","images/tiger.jpg");
    var imgCt= myPix.length-1;
    var ltArrow = 37;
    var rtArrow = 39;

    var thisKey=(evt) ? evt.which : window.event.keyCode; //brauseritüüpidele vastavaks viimine
    
    if (thisKey == ltArrow) {
        chgSlide(-1);
    }
    else if (thisKey == rtArrow) {
        chgSlide(1);
    }
    return false; // probleem safaris

    function chgSlide(direction) {
        thisPic = thisPic + direction;
        if(thisPic>imgCt) {
            thisPic = 0;
        }
        if (thisPic<0) {
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}