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
console.log(ThirdChildFromParentId);

