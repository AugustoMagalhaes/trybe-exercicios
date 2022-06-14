const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

firstLi.originalText = firstLi.innerText;
secondLi.originalText = secondLi.innerText;
thirdLi.originalText = thirdLi.innerText;

const anyLiElement = document.getElementsByTagName('li');

function defineTech(event) {
    for (let selectedLi of anyLiElement) {        
        if (event.target === selectedLi) {
            selectedLi.setAttribute('class', 'tech');            
        } else {
            selectedLi.removeAttribute('class', 'tech');
        }
    }      
};

firstLi.addEventListener('click', defineTech);
secondLi.addEventListener('click', defineTech);
thirdLi.addEventListener('click', defineTech);

function changeText() {
    const techElement = document.querySelector('.tech');
    const techElementId = techElement.id;    
    if (input.value === "") {       
       techElement.innerText = document.querySelector(`#${techElementId}`).originalText;       
    } else {
        techElement.innerText = input.value;
    }
}

input.addEventListener('keyup', changeText, true);

function redirectMyWebPage() {
    window.open('http://augustomagalhaes.github.io', '_blank');
}

myWebpage.addEventListener('dblclick', redirectMyWebPage);

function changeColor(event) {        
    if (event.target.style.color === '' || event.target.style.color === 'white') {
        event.target.style.color = 'green';
    } else {
        event.target.style.color = 'white';        
    }    
}

myWebpage.addEventListener('mouseover', changeColor);

function resetText(event) {  
  event.target.innerText = 'Opção reiniciada';  
}

firstLi.addEventListener('dblclick', resetText);
