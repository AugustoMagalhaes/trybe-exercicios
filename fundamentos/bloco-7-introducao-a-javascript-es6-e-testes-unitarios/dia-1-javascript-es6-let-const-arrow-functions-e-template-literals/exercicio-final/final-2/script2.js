const longestWord = (phrase) => {
  phraseWords = phrase.split(' ');
  let actualLongestWord = '';
  for (let index = 0; index < phraseWords.length; index += 1) {
    actualLongestWord = (phraseWords[index].length > actualLongestWord.length) ? phraseWords[index] : actualLongestWord;
  }
  return actualLongestWord;
}

console.log(longestWord('teste com muitas palavras'));