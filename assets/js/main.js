// * options
//      0 - rock
//      1 - paper
//      2 - scissors

let user_choice = null;
let computer_choice = null;

// * user input

let radio_buttons = document.querySelectorAll('input[name="option"]');

// * computer input

const randomComputerChoice = () => {
  let random_number = Math.floor(Math.random() * 3);
  //   console.log(random_number);
  if (random_number === 0) {
    return "rock";
  } else if (random_number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};
// console.log(randomComputerChoice());

// * game logic

radio_buttons.forEach((button) =>
  button.addEventListener("input", () => {
    user_choice = document.querySelector('input[name="option"]:checked').value;
    computer_choice = randomComputerChoice();
    console.log({ user_choice });
    console.log({ computer_choice });
    // show user choice at choice output
    // show computer choice at choice output

    if (user_choice === computer_choice) {
      // result: draw
      // output: it's a draw
      // user score +1
      // computer score +1
    } else if (
      (user_choice === "rock" && computer_choice === "scissors") ||
      (user_choice === "paper" && computer_choice === "rock") ||
      (user_choice === "scissors" && computer_choice === "paper")
    ) {
      // result: user wins
      // output: ${user-choice} beats ${computer_choice}, you win!
      // user score +1
    } else {
      // result: computer wins
      // output: ${computer_choice} beats ${user-choice}, computer wins!
      // computer score +1
    }
    // setzt user auswahl zurück, um erneut auswahl treffen zu können
    document.querySelector('input[name="option"]:checked').checked = false;
  })
);

// * round result
// a) output
// b) round -1

const roundOutput = (result) => {
  document.getElementById("roundOutput").innerHTML = result;
};

// * restart
