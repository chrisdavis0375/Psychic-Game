var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//Starting variables
var wins = 0
var losses = 0
var guessesLeft = 9
var guessedLetters = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(guess) {
    var userGuess = guess.key;

    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
    }

    if (userGuess !== computerChoice) {
        document.getElementById("guessesSoFar").innerHTML = userGuess + guessedLetters  
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessedLetters = [];
    }

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

}
