// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false
    }
    const dup =[]
    for (let letter in alphabet) {
//       dup.indexOf(alphabet[letter]) < 0 ? dup.push(alphabet[letter]) : return false
      if(dup.indexOf(alphabet[letter]) === -1) {
        dup.push(alphabet[letter])
      } else {
        return false
      }
    }
    const alpha = "abcdefghijklmnopqrstuvwxyz ".split("")
    const codeAlpha = [...alphabet, " "]
    const inp = input.toLowerCase().split("")
    if (encode === true) {
      return inp.map(letter => {
        return codeAlpha[alpha.indexOf(letter)]
      }).join("")
    } else {
      return inp.map(letter => {
        return alpha[codeAlpha.indexOf(letter)]
      }).join("")
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
