const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", handleChoice)
});

function handleChoice(choice) {
    console.log(choice);
}