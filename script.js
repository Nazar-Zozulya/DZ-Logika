// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    let colorSelect = document.getBoundingById("#selectColor");
}

// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = {"colorBlack":"Black",
                        "colorRed":"Red",
                        "colorPink":"Pink",
                        "colorBlue":"Blue",
                        "colorGreen":"Green"
                        
};
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.