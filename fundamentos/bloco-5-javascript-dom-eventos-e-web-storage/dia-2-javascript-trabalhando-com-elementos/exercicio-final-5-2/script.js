const manipulatedH1 = document.createElement('h1');
manipulatedH1.innerText = 'Exercício 5.2 - JavaScript DOM';
const getBody = document.querySelector('body');
getBody.appendChild(manipulatedH1);

const manipulatedMain = document.createElement('main');
manipulatedMain.setAttribute('class', 'main-content');
getBody.appendChild(manipulatedMain);

const manipulatedCenterContentSection = document.createElement('section');
manipulatedCenterContentSection.setAttribute('class', 'center-content');
manipulatedMain.appendChild(manipulatedCenterContentSection);

const manipulatedParagraph = document.createElement('p');
manipulatedParagraph.innerText = 'Parágrafo da seção criada no passo 3.';
manipulatedCenterContentSection.appendChild(manipulatedParagraph);

const manipulatedLeftContentSection = document.createElement('section');
manipulatedLeftContentSection.setAttribute('class', 'left-content');
manipulatedMain.appendChild(manipulatedLeftContentSection);

const manipulatedRightContentSection = document.createElement('section');
manipulatedRightContentSection.setAttribute('class', 'right-content');
manipulatedMain.appendChild(manipulatedRightContentSection);

const manipulatedImgSrc = document.createElement('img');
manipulatedImgSrc.setAttribute('class', 'small-image');
manipulatedImgSrc.src = 'https://picsum.photos/200';
manipulatedLeftContentSection.appendChild(manipulatedImgSrc);

const ulNumbersInFull = document.createElement('ul');
let numbersInFullList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
manipulatedRightContentSection.appendChild(ulNumbersInFull);

for (let index = 0; index < numbersInFullList.length; index += 1) {
    let numberInFull = numbersInFullList[index];
    const createNumberLi = document.createElement('li');
    createNumberLi.innerText = numberInFull;
    ulNumbersInFull.appendChild(createNumberLi);
}

const firstH3Main = document.createElement('h3');
firstH3Main.innerText = 'Primeiro H3 da Main'
manipulatedMain.appendChild(firstH3Main);

const secondH3Main = document.createElement('h3');
secondH3Main.innerText = 'Segundo H3 da Main';
manipulatedMain.appendChild(secondH3Main);

const thirdH3Main = document.createElement('h3');
thirdH3Main.innerText = 'Terceiro H3 da Main';
manipulatedMain.appendChild(thirdH3Main);

manipulatedH1.setAttribute('class', 'title');

firstH3Main.className = 'description';
secondH3Main.className = 'description';
thirdH3Main.className = 'description';

manipulatedMain.removeChild(manipulatedLeftContentSection);

manipulatedRightContentSection.style.marginRight = 'auto';

const centerContentSectionParent = manipulatedCenterContentSection.parentNode;
centerContentSectionParent.style.backgroundColor = 'green';

const numbersInFullListItems = ulNumbersInFull.children;

for (let index = numbersInFullListItems.length - 1; index >= 0 ; index -= 1) {
    let numbersInFullSingleItem = numbersInFullListItems[index];
    if (numbersInFullSingleItem.innerText === 'nove' || numbersInFullSingleItem.innerText === 'dez') {
        ulNumbersInFull.removeChild(numbersInFullSingleItem);
    }
}

thirdH3Main.style.paddingBottom = '10px';


