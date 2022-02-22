function twoYearsFromNow() {
  const textTwoYears = document.getElementsByTagName("p");
  textTwoYears[1].innerText = window.prompt("Como você se vê daqui 2 anos: ");
}

function setBackgroundColor(color) {}

function changeYellowToGreen() {
  let mainContent = document.getElementsByClassName("main-content")[0];

  if (mainContent.style.backgroundColor === "") {
    mainContent.style.backgroundColor = "rgb(76,164,109)";
  } else if (mainContent.style.backgroundColor === "rgb(76, 164, 109)") {
    mainContent.style.backgroundColor = "yellow";
  } else if (mainContent.style.backgroundColor === "yellow") {
    mainContent.style.backgroundColor = "rgb(76,164,109)";
  }
}

function changeRedToWhite() {
  let centerContent = document.getElementsByClassName("center-content")[0];

  if (centerContent.style.backgroundColor === "") {
    centerContent.style.backgroundColor = "white";
  } else if (centerContent.style.backgroundColor === "white") {
    centerContent.style.backgroundColor = "red";
  } else if (centerContent.style.backgroundColor === "red") {
    centerContent.style.backgroundColor = "white";
  }
} // replace(/JavaEscripito/gi, 'Script');

function correctNameH1() {
  const correctedH1 = document.getElementsByClassName("title")[0];
  correctedH1.innerText = correctedH1.innerText.replace(
    /JavaEscripito/gi,
    "Javascript"
  );
}

function paragraphsToUppercase() {
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i += 1) {
    paragraphs[i].innerText = paragraphs[i].innerText.toUpperCase();
  }
}

function showParagraphsOnConsole() {
  let consoleParagraphs = document.getElementsByTagName("p");
  for (let i = 0; i < consoleParagraphs.length; i += 1) {
    console.log(consoleParagraphs[i].innerText);
  }
}
