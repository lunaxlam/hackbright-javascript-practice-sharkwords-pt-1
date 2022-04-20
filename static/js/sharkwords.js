const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;


// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  for (const letter of word) {

    // Get the section of the DOM with the id="word-container"
    const container = document.querySelector('#word-container');

    // Before the section ends, insert a div element with a letter-specific value class AND a letter-box class (two separate classes)
    container.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);

  }
};


// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  
  for (const letter of ALPHABET) {

    // Get the section of the DOM with the id="letter-buttons"
    const button = document.querySelector('#letter-buttons');

    //Before the section ends, insert a button element and wrap a letter in it
    button.insertAdjacentHTML('beforeend', `<button>${letter}</button`); 
    
  }

};


// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {

  buttonEl.disabled = true;

};


// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {

  const letterDiv = document.querySelector(`.${letter}`);
  
  // Returns a "truthy" value because if the querySelector could not find the letter, it would be 'null'
  if (letterDiv) {
    return "true";
  }

};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';
  const letter = 'h';

  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call
  createDivsForChars(word)

  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons()

  console.log(isLetterInWord(letter, word))
  
  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
