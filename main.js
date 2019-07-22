const typewriter = (words = [], counter = 0) => {
  // LOOP FOR EACH WORD IN ARRAY
  //for (let i = 0; i < words.length; i++) {

  if (counter > 2) {
    counter = 0;
  }

  const word = words[counter];
  const wordLength = word.length;
  const letterArray = word.split("");
  const wordBox = document.querySelector("#text");

  const timeArray = [400, 500];
  const spellSpeed = timeArray[Math.floor(Math.random() * timeArray.length)];
  const deleteSpeed = 200;
  const deleteDelay = 2000;
  const iterationDelay = 3000;

  // SPELL OUT WORD FUNCTION
  function spell(currentLength) {
    setTimeout(() => {
      wordBox.innerHTML += letterArray[wordLength - currentLength];

      if (--currentLength) {
        spell(currentLength);
      } else {
        setTimeout(() => {
          remove(wordLength);
        }, deleteDelay);
      }
    }, spellSpeed);
  }

  // DELETE LETTERS FROM WORD FUNCTION
  function remove(currentLength) {
    setTimeout(() => {
      const string = wordBox.textContent;
      const newString = string.substring(0, string.length - 1);
      wordBox.textContent = newString;
      if (--currentLength) {
        remove(currentLength);
      } else {
        setTimeout(() => {
          //   counter++;
          typewriter(words, ++counter);
        }, iterationDelay);
      }
    }, deleteSpeed);
  }

  spell(wordLength);
};

const words = ["creator", "developer", "designer"];

// Start typewriter on load
window.addEventListener("DOMContentLoaded", () => typewriter(words));
