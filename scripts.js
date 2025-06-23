const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", handleChoice);
});

function handleChoice() {
    clearResults();
    const pChoice = this.innerHTML;
    const pResult = document.createElement("p");
    pResult.textContent = "Player chooses " + pChoice + "!";
    pResult.classList.add("result");
    document.body.appendChild(pResult);
    const cmpChoice = computerChoice();
    const cmpResult = document.createElement("p");
    cmpResult.textContent = "Computer chooses " + cmpChoice + "!";
    cmpResult.classList.add("result");
    document.body.appendChild(cmpResult);
    if ((pChoice === "Scissors" && cmpChoice === "Paper") || (pChoice === "Paper" && cmpChoice === "Scissors")) {
        const result = document.createElement("p");
        if (pChoice === "Scissors") {
            result.textContent = "Scissors beats Paper! Player wins the round!";
        }
        else {
            result.textContent = "Scissors beats Paper! Computer wins the round!";
        }
        result.classList.add("result");
        document.body.appendChild(result);
    }
    else if (pChoice === "Paper" && cmpChoice === "Rock" || (pChoice === "Rock" && cmpChoice === "Paper")) {
        const result = document.createElement("p");
        if (pChoice === "Paper") {
            result.textContent = "Paper beats Rock! Player wins the round!";
        }
        else {
            result.textContent = "Paper beats Rock! Computer wins the round!";
        }
        result.classList.add("result");
        document.body.appendChild(result);
    }
    else if (pChoice === "Rock" && cmpChoice === "Scissors" || pChoice === "Scissors" && cmpChoice === "Rock") {
        const result = document.createElement("p");
        if (pChoice === "Paper") {
            result.textContent = "Rock beats Scissors! Player wins the round!";
        }
        else {
            result.textContent = "Rock beats Scissors! Computer wins the round!";
        }
        result.classList.add("result");
        document.body.appendChild(result);
    }
    else {
        const result = document.createElement("p");
        result.textContent = "Round is a draw!";
        result.classList.add("result");
        document.body.appendChild(result);
    }
}

function computerChoice() {
    switch(getRandomInt(3)) {
        case 0:
          return "Rock";
        case 1:
          return "Scissors";
        case 2:
          return "Paper";
      } 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function clearResults() {
    const results = document.querySelectorAll(".result");
    results.forEach((result) => {
        result.remove();
    });
}