const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function anchorLink(event) {
  event.preventDefault();  
}
HREF_LINK.addEventListener('click', anchorLink);

function lazyCheckbox(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', lazyCheckbox);

