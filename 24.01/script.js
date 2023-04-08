document.querySelector(".button-create").onclick = function bebraB()
{
    var elementCreator = document.createElement(tag = "input"/* 
    properties = [ ["innerHTML", "Lorem ipsum"], ["type", "text"], ["placeholder", "dolor sit amet"],], 
    styles = [ ["fontSize", "18px"], ["color", "red"] ], parentElem = document.querySelector('elementCreator')*/);

    elementCreator.style.color = "red";
    elementCreator.style.fontSize = "18px";
    elementCreator.setAttribute("placeholder","dolor sit amet")
    document.body.appendChild(elementCreator);
}

// document.body.addEventListener("keyup", bebraB)