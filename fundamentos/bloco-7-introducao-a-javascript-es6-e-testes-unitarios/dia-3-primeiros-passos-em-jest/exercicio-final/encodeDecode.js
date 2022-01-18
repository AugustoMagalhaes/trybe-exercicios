function encode(phrase) {
    let splitedPhrase = phrase.split('');
    for (let i = 0; i < splitedPhrase.length; i += 1) {
      let charArray = [null, 'a', 'e', 'i', 'o', 'u'];
      let letter = splitedPhrase[i];
      if (charArray.includes(letter) === true) {
        splitedPhrase[i] = charArray.indexOf(letter).toString();
      }
    }
    let joinedPhrase = splitedPhrase.join('');
    return joinedPhrase;
  }
  
  function decode(phrase2) {
    let splitedPhrase2 = phrase2.split('');
    for (let i = 0; i < splitedPhrase2.length; i += 1) {
      let charArray2 = [null, 'a', 'e', 'i', 'o', 'u'];
      let number = splitedPhrase2[i];
      if (charArray2[number]) {
        splitedPhrase2[i] = charArray2[number];
      }
    }
    let joinedPhrase2 = splitedPhrase2.join('');
    return joinedPhrase2;
  }

  module.exports = encode, decode;