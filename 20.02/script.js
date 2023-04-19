const elemText1 = document.getElementById("text1");
const elemText2 = document.getElementById("text2");
const elemText4 = document.getElementById("text4");
const elemText5 = document.getElementById("text5");
const elemText6 = document.getElementById("text6");
var bunnerComplete = document.querySelector(".div-complete");
var keyName;
let counter = 0

function checkPress(evt){
    // keyName = String.fromCharCode(event.keyCode);
    // alert(keyName);
    if (!evt) evt = event;
    if(evt.shiftKey && evt.keyCode==72 && counter == 0)
    {
        elemText1.setAttribute("style", "color: rgb(68, 255, 0)");
        counter = counter + 1;
    }

    if(evt.keyCode==73 && counter == 1)
    {
        elemText2.setAttribute("style", "color: rgb(68, 255, 0)");
        counter = counter + 1;
    }

    if(evt.keyCode==190 && counter == 2)
    {
        elemText4.setAttribute("style", "color: rgb(68, 255, 0)"); 
        counter = counter + 1;
    }

    if(evt.shiftKey && evt.keyCode==49 && counter == 3)
    {
        elemText5.setAttribute("style", "color: rgb(68, 255, 0)");
        counter = counter + 1;
    }

    if(evt.keyCode==55 && counter == 4)
    {
        elemText6.setAttribute("style", "color: rgb(68, 255, 0)");
        counter = counter + 1;
    }

    if(counter == 5)
    {
        bunnerComplete.style.opacity = "1";
    }
}
document.addEventListener('keyup',checkPress);