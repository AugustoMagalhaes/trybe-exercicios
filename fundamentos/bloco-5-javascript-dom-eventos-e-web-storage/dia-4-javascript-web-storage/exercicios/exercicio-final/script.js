const targetText = document.getElementsByClassName('verse');
const targetContent = document.getElementById('content');
const newBgColor = document.getElementById('new-bgcolor');
const newColor = document.getElementById('new-color');
const newTextSize = document.getElementById('new-textsize');
const newLineHeight = document.getElementById('new-lineheight');
const selectFontFamily = document.getElementById('select-fontfamily');

function setBgColor() {
    targetContent.style.backgroundColor = newBgColor.value;
}

newBgColor.addEventListener('change', setBgColor);

function setColor() {
    targetContent.style.color = newColor.value;
}

newColor.addEventListener('change', setColor);

function setTextSize() {
    targetContent.style.fontSize = newTextSize.value + "px";
}

newTextSize.addEventListener('change', setTextSize);

function setLineHeight() {
    targetContent.style.lineHeight = newLineHeight.value;
}

newLineHeight.addEventListener('change', setLineHeight);

function setFontFamily() {
    const optionFontFamily = selectFontFamily.options[selectFontFamily.selectedIndex];
    targetContent.style.fontFamily = optionFontFamily.value;
}

selectFontFamily.addEventListener('change', setFontFamily);

