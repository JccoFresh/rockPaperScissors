function selectRPS() {
    return Math.floor((Math.random() * 3) + 1);
} //generate random number
let choice; //empty placeholder now, but will later hold value of user choice (1,2,3) to compare with the rng number (1,2,3)
let userImage = document.getElementById("user"); //selects user choice element
let computerImage = document.getElementById("cI"); //selects computer choice element
let result = document.getElementById("result"); //selects the result element where the message will show up
let choiceImage = document.getElementById("img"); //selects images at the bottom (choices)
let imgArray = ['assets/paper.png', 'assets/rock.png', 'assets/scissors.png']; //array with image src's
console.log(choiceImage);

function checkResult(userChoice) {
    let rng = selectRPS();
    if (userChoice == 1) { //assigns appropriate image to the user choice element
        choice = 1; //1 is paper
        userImage.src = imgArray[0];
    }
    else if (userChoice == 2) {
        choice = 2; //2 is rock
        userImage.src = imgArray[1];
    }
    else if (userChoice == 3) {
        choice = 3; //3 is scissors
        userImage.src = imgArray[2];
    }
    if (rng == 1) { //assigns appropriate image to the computer choice element
        computerImage.src = imgArray[0];
    }
    else if (rng == 2) {
        computerImage.src = imgArray[1];
    }
    else if (rng == 3) {
        computerImage.src = imgArray[2];
    }
    if (choice == rng) { //result display
        result.innerHTML = "You tied!";
        choiceImage.style.display = "none";
        result.style.margin = "1.3em";
    }
    else if ((choice == 3 && rng == 1) || (choice == 2 && rng == 3) || (choice == 1 && rng == 2)) {
        result.innerHTML = "You win!";
        choiceImage.style.display = "none";
        result.style.margin = "1.3em";
    }
    else if ((choice == 3 && rng == 2) || (choice == 2 && rng == 1) || (choice == 1 && rng == 3)) {
        result.innerHTML = "You lose!";
        choiceImage.style.display = "none";
        result.style.margin = "1.3em";
    }
}

function reset() {
    result.innerHTML = "";
    result.style.margin = "-0.4em";
    userImage.src = "https://i.postimg.cc/pXs6tSZt/Lol-question-mark.png";
    computerImage.src = "https://i.postimg.cc/pXs6tSZt/Lol-question-mark.png";
    choiceImage.style.display = "inline";

} //resets pictures for a new round