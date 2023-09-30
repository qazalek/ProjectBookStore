
function picture(img) {
    document.getElementById(img).style.position="fixed";
    document.getElementById(img).style.top="10%";
    document.getElementById(img).style.left="10%";
    document.getElementById(img).style.width= "80%";
    document.getElementById(img).style.height= "80%";
    document.getElementById(img).style.boxSizing="border-box";
    document.getElementById(img).style.border= "10px double black";

}

function movePin(img){
    document.getElementById(img).style.width= "95%";
    document.getElementById(img).style.border= "10px double black";
    document.getElementById(img).style.boxSizing="border-box";
}

function again(m){
    document.getElementById(m).style.position="initial";
    document.getElementById(m).style.top="initial";
    document.getElementById(m).style.left="initial";
    document.getElementById(m).style.width= "30vw";
    document.getElementById(m).style.height= "auto";
    document.getElementById(m).style.border= "none";

}