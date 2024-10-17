window.onload = initAll;

function initAll() {
    for (var i=0; i<
        document.forms[0].elements.length; i++) {
            var thisElement = document.forms[0].elements[i];

            if (thisElement.type == "button") {
                thisElement.onclick = saySomething;
            }
        }
}

function saySomething() {
    switch(this.value) {
        case "Linc":
            alert("Four score and seven years ao...");
            break;
        case "Ken":
            alert("Ask not what your country can do for you...");
            break;
        case "Nix":
            alert("Be happy be proud be gay");
            break;
        default:
    }
}
