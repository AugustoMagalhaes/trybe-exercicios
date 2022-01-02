const targetContent = document.getElementById('content');
const newBgColor = document.getElementById('new-bgcolor');
const newColor = document.getElementById('new-color');
const newTextSize = document.getElementById('new-textsize');
const newLineHeight = document.getElementById('new-lineheight');
const selectFontFamily = document.getElementById('select-fontfamily');

function setBgColor() {
    targetContent.style.backgroundColor = newBgColor.value;
    localStorage.setItem('background-color', newBgColor.value);
}

newBgColor.addEventListener('change', setBgColor);

function setColor() {
    targetContent.style.color = newColor.value;
    localStorage.setItem('color', newColor.value);
}

newColor.addEventListener('change', setColor);

function setTextSize() {
    targetContent.style.fontSize = newTextSize.value + 'px';
    localStorage.setItem('font-size', newTextSize.value + 'px');
    localStorage.setItem('fontSize-value', newTextSize.value);
}

newTextSize.addEventListener('change', setTextSize);

function setLineHeight() {
    targetContent.style.lineHeight = newLineHeight.value;
    localStorage.setItem('line-height', newLineHeight.value);
}

newLineHeight.addEventListener('change', setLineHeight);

function setFontFamily() {
    const actualFontSelect = selectFontFamily.options;
    targetContent.style.fontFamily = actualFontSelect[selectFontFamily.selectedIndex].value;
    localStorage.setItem('font-family', actualFontSelect[selectFontFamily.selectedIndex].value);
    localStorage.setItem('selectedIndex', actualFontSelect.selectedIndex);
}

selectFontFamily.addEventListener('change', setFontFamily);

function onloadValue(element, property) {
    if (localStorage[property] !== undefined) {
        element.value = localStorage[property];
        return element.value;
    } else {
        element.value = window.getComputedStyle(element, null).getPropertyValue(property);
    }
}

function loadPage() {
    let pageStyle = targetContent.style;
    pageStyle.backgroundColor = onloadValue(newBgColor, 'background-color');
    pageStyle.color = onloadValue(newColor, 'color');
    pageStyle.fontSize = localStorage['font-size'];
    newTextSize.value = parseFloat(localStorage['fontSize-value']);
    pageStyle.lineHeight = onloadValue(newLineHeight, 'line-height')
    pageStyle.fontFamily = localStorage['font-family'];
    selectFontFamily.options.selectedIndex = localStorage['selectedIndex'];
}

window.onload = function () {
    loadPage();
}

function lag() {
    console.log('newBgColor', newBgColor.value);
    console.log('newColor', newColor.value);
    console.log('newTextSize', newTextSize.value);
    console.log('tg font-size', targetContent.style.fontSize);
    console.log('newLineHeight', newLineHeight.value);
    console.log('font family', selectFontFamily.options[selectFontFamily.selectedIndex].value);
}

