// HANGMAN GAME 

// ===================== GLOBAL VARIABLES =======================
//STEP 1. Make the global variables
//Array of the words
var words = ["Palabra Uno", "Palabra Dos", "Palabra tres"];
console.log("this are the words array: " + words);  


// Solution will be held here.
var chosenWord = "";
//Empty array for the letters that has been used from the chosenWord
var usedLetters = [];
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
//Blanks and correct ones 
var blanksAndCorrect = [];
// wrong guesses
var wrongGuesses = [];
//Counters 
var chances = 10;
var win = 0; 
var lost = 0;

// ===================== START GAME FUNTCION =======================
function startGame(){
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log("this is the random word: " + chosenWord);
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndCorrect = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
    //Lines of the hidden word 
var lines = "";

for(var i = 0; i < chosenWord.length ; i++){
  if(chosenWord[i] === ' '){
    lines += "- ";
  } else {
    lines += "_ ";
  }
}
//Show hidden word with lines on html
document.getElementById("word").innerHTML = lines;
console.log(lines + chosenWord);
for (var i = 0; i < numBlanks; i++) {
  blanksAndCorrect.push("_");
}
console.log(blanksAndCorrect);
// FUntion that types the letter 
};




startGame();
