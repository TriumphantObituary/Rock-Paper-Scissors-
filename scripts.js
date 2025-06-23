const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", handleChoice)
});

function handleChoice(choice) {
    console.log(computerChoice());
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