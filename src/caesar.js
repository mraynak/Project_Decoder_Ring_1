// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let lowerCase = input.toLowerCase()
    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    if (!encode) {
      shift *= (-1)
    }
    return lowerCase.split("").map(letter => {
      if(alpha.includes(letter)) {
        if(alpha.indexOf(letter) + shift < 0) {
          return alpha[alpha.indexOf(letter) + shift + 26]
        }
        if(alpha.indexOf(letter) + shift > 25) {
          return alpha[alpha.indexOf(letter) + shift - 26]
        }
        return alpha[alpha.indexOf(letter) + shift]
      } else {
        return letter
      }
    }).join("")
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
