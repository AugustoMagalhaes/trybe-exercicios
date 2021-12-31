const targetText = document.getElementsByClassName('verse');
const targetArticle = document.getElementById('content');
const newBgColor = document.getElementById('new-bgcolor');
const newColor = document.getElementById('new-color');
const newTextSize = document.getElementById('new-textsize');
const newLineHeight = document.getElementById('new-lineheight');

function setBgColor() {
    for (let text of targetText) {
        text.style.backgroundColor = newBgColor.value;
    }
}

newBgColor.addEventListener('change', setBgColor);

function setColor() {
    for (let text of targetText) {
        text.style.color = newColor.value;
    }
}

newColor.addEventListener('change', setColor);

function setTextSize() {
    targetArticle.style.fontSize = newTextSize.value + "px";
}

newTextSize.addEventListener('change', setTextSize);

function setLineHeight() {
    targetArticle.style.lineHeight = 
}


