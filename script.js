function selectRPS() {
    return Math.floor((Math.random() * 3) + 1);
}
let choice;
let userImage = document.getElementById("user");
let computerImage = document.getElementById("cI");
let result = document.getElementById("result");
function checkResult(userChoice) {
    let rng = selectRPS();
    if (userChoice == 1) {
        choice = 1; //1 is paper
        userImage.src = "assets/paper.png";
    }
    else if (userChoice == 2) {
        choice = 2; //2 is rock
        userImage.src = "assets/rock.png"
    }
    else if (userChoice == 3) {
        choice = 3; //3 is scissors
        userImage.src = "assets/scissors.png"
    }
    if (rng == 1) {
        computerImage.src = "assets/paper.png";
    }
    else if (rng == 2) {
        computerImage.src = "assets/rock.png"
    }
    else if (rng == 3) {
        computerImage.src = "assets/scissors.png"
    }
    if (choice == rng) {
        result.innerHTML = "You tied!";
    }
    else if ((choice == 3 && rng == 1) || (choice == 2 && rng == 3) || (choice == 1 && rng == 2)) {
        result.innerHTML = "You win!";
    }
    else if ((choice == 3 && rng == 2) || (choice == 2 && rng == 1) || (choice == 1 && rng == 3)) {
        result.innerHTML = "You lose!";
    }
}

function reset() {
    result.innerHTML = "";
    userImage.src = "https://i.postimg.cc/pXs6tSZt/Lol-question-mark.png";
    computerImage.src = "https://i.postimg.cc/pXs6tSZt/Lol-question-mark.png";
    
}