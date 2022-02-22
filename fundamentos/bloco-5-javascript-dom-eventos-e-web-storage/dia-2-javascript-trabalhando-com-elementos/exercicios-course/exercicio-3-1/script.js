let sectionsList = document.querySelectorAll('section');

for (let i = sectionsList.length - 1; i >= 0; i -= 1) {
    let sectionsElement = sectionsList[i];    

    if (sectionsElement.id !== 'pai' && sectionsElement.id !== 'elementoOndeVoceEsta' && sectionsElement.id !== 'primeiroFilhoDoFilho') {
        let sectionsElementParent = sectionsElement.parentNode;
        sectionsElementParent.removeChild(sectionsElement);
        console.log('retirado: ', sectionsElement)
    }     
}





