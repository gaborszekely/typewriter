const words = [
    'creator.',
];

// START TYPEWRITER ON LOAD
if (window.addEventListener) {
    window.addEventListener('load', typewriter, false);
} else {
    window.attachEvent('onload', typewriter);
}

function typewriter() {

    // LOOP FOR EACH WORD IN ARRAY
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordLength = word.length;
        const letterArray = [];
        const wordBox = document.querySelector('#text');

        var timeArray = [500, 600, 700, 800];
        var randTime = timeArray[Math.floor(Math.random() * timeArray.length)];
        var deleteDelay = 10000;
        var iterationDelay = 1000;
    

        // CREATE LETTER ARRAY
        for (let i = 0; i < wordLength; i++) {
            letterArray.push(word.charAt(i));
        }

        // SPELL OUT WORD FUNCTION
        function spell(x, callback, length) {
            setTimeout(() => {
                wordBox.innerHTML += letterArray[wordLength - x];
                if (--x) spell(x, callback, length);
            }, randTime);

            callback(length);
        }

        // DELETE LETTERS FROM WORD FUNCTION
        function remove(y) {
            setTimeout(() => {
                const string = wordBox.textContent;
                const newString = string.substring(0, string.length - 1);
                wordBox.textContent = newString;
                if (--y) remove(y);
            }, deleteDelay);
        }

        // CALL SPELL WORD FUNCTION
        spell(wordLength, remove, wordLength);
    }
}






// setTimeout(function () {
//     wordBox.innerHTML += letterArray[wordLength - x];
//     if (--x) {          // If i > 0, keep going
//         add(x);       // Call the loop again, and pass it the current value of i
//     }
// }, randTime);