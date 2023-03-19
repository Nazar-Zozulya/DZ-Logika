var buttonMore = document.querySelector(".button-readmore");
var textContent = document.querySelector(".text-content");

let saveText = textContent.innerHTML;

function onButtonClick()
{
    console.log(textContent.innerHTML.length);
    if(textContent.innerHTML.length < 100)
    {
        textContent.innerHTML = saveText;
        alert(textContent);
        // textContent.innerHTML = `${textContent.innerHTML}`;
    }
    else if(textContent.innerHTML.length > 100)
    {
        textContent.innerHTML = `${textContent.innerHTML.slice(0, 50)}...`;
    }
}

buttonMore.addEventListener("click", onButtonClick);