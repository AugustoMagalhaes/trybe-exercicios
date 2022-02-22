const whereYouAre = document.getElementById('elementoOndeVoceEsta');

const parentWhereYouAre = whereYouAre.parentNode;
parentWhereYouAre.style.color = 'blue';

const FirstChildWhereYouAre = whereYouAre.firstElementChild;
FirstChildWhereYouAre.innerText = "Primeiro filho do filho.";

const FirstParentsChild = document.getElementById('pai').firstChild;

const FirstParentsChildByWhereYouAre = whereYouAre.previousElementSibling;

const attentionText = whereYouAre.nextSibling;

const ThirdChild = whereYouAre.nextElementSibling;

const ParentId = document.getElementById('pai');

const ThirdChildFromParentId = ParentId.childNodes[5];

const aNewSibling = document.createElement('section');
aNewSibling.setAttribute('id', 'quintoFilho')
ParentId.appendChild(aNewSibling);

const whereYouAresChild = document.createElement('section');
whereYouAresChild.setAttribute('id', 'terceiroFilhoDoFilho')
whereYouAre.appendChild(whereYouAresChild);

const anotherChild = document.createElement('section');
anotherChild.setAttribute('id', 'primeiroFilhoDoFilhoDoFilho');
FirstChildWhereYouAre.appendChild(anotherChild);

const ThirdChildFromAnotherChild = anotherChild.parentNode.parentNode.nextElementSibling;




