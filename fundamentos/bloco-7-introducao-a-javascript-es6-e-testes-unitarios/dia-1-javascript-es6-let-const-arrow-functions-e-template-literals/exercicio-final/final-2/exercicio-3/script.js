const clickParagraph = document.getElementById('click-display');
const clickBtn = document.getElementById('click-counter');
let clickCount = 0;

const addClick = () => {
    clickParagraph.innerText = `Cliques: ${++clickCount}`;
}

clickBtn.addEventListener('click', addClick);