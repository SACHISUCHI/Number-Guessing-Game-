
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    const userGuess = parseInt(document.getElementById('userGuess').value);
    let resultMessage; 
    if (userGuess > randomNumber) {
        resultMessage = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        resultMessage = 'Too low! Try again.';
    } else {
        resultMessage = 'Congratulations! You guessed the right number.';
    }


    document.getElementById('result').textContent = resultMessage;
} 