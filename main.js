

// START TYPEWRITER ON LOAD
if (window.addEventListener) {
    window.addEventListener('load', typewriter, false);
} else {
    window.attachEvent('onload', typewriter);
}

var counter = 0;

function typewriter() {

    // LOOP FOR EACH WORD IN ARRAY
    //for (let i = 0; i < words.length; i++) {
    const words = [
        'creator. ',
        'developer. ',
        'designer. '
    ];

    if (counter > 2) {
        counter = 0;
    }
    
    const word = words[counter];
    const wordLength = word.length;
    const letterArray = [];
    const wordBox = document.querySelector('#text');

    var timeArray = [400, 500];
    var spellSpeed = timeArray[Math.floor(Math.random() * timeArray.length)];
    var deleteSpeed = 200;
    var deleteDelay = 2000;
    var iterationDelay = 3000;


    // CREATE LETTER ARRAY
    for (let i = 0; i < wordLength; i++) {
        letterArray.push(word.charAt(i));
    }

    var finalLetter = letterArray[wordLength - 1];

    // SPELL OUT WORD FUNCTION
    function spell(x) {
        setTimeout(() => {
            wordBox.innerHTML += letterArray[wordLength - x];
            if (--x) { spell(x); }
            else {
                setTimeout(() => {
                    remove(wordLength);
                }, deleteDelay);
            }
        }, spellSpeed);
    }

    // DELETE LETTERS FROM WORD FUNCTION
    function remove(y) {
        setTimeout(() => {
            const string = wordBox.textContent;
            const newString = string.substring(0, string.length - 1);
            wordBox.textContent = newString;
            if (--y) { remove(y); }
            else {
                setTimeout(() => {
                    counter += 1;
                    typewriter();
                }, iterationDelay);
            }
        }, deleteSpeed);
    }

    spell(wordLength);
}
