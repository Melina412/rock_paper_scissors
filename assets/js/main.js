// * options
//      0 - rock
//      1 - paper
//      2 - scissors

// * game variables

let user_choice = null;
let computer_choice = null;

let user_score = 0;
let computer_score = 0;

// * user input

// - radio buttons

let radio_options = document.querySelectorAll('input[name="options"]');
let radio_rounds = document.querySelectorAll('input[name="rounds"]');

// - rounds calcutation

let total_rounds = 5;

radio_rounds.forEach((button) => {
  button.addEventListener("change", () => {
    total_rounds = Number(
      document.querySelector('input[name="rounds"]:checked').value
    );
    roundOutput();

    console.log({ total_rounds });
  });
});

const roundOutput = () => {
  document.getElementById("totalRounds").innerHTML = total_rounds;
};
let current_round = 1;
console.log({ total_rounds });

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

radio_options.forEach((option) =>
  option.addEventListener("input", () => {
    user_choice = document.querySelector('input[name="options"]:checked').value;
    computer_choice = randomComputerChoice();
    console.log({ user_choice });
    console.log({ computer_choice });
    // show user choice at choice output
    // show computer choice at choice output

    // show current and total rounds:
    //    current round an dieser stelle auslesen!
    document.getElementById("currentRound").innerHTML = current_round;
    console.log({ current_round });

    if (user_choice === computer_choice) {
      // result: draw
      // output: it's a draw
      user_score++; // user score +1
      computer_score++; // computer score +1
      //
    } else if (
      (user_choice === "rock" && computer_choice === "scissors") ||
      (user_choice === "paper" && computer_choice === "rock") ||
      (user_choice === "scissors" && computer_choice === "paper")
    ) {
      // result: user wins
      // output: ${user-choice} beats ${computer_choice}, you win!
      user_score++; // user score +1
      //
    } else {
      // result: computer wins
      // output: ${computer_choice} beats ${user-choice}, computer wins!
      computer_score++; // computer score +1
    }

    current_round++; // round +1

    console.log({ current_round });
    console.log({ total_rounds });
    console.log({ user_score });
    console.log({ computer_score });

    // score output
    document.getElementById("userScore").innerHTML = user_score;
    document.getElementById("computerScore").innerHTML = computer_score;

    // setzt user auswahl zurück, um erneut auswahl treffen zu können
    document.querySelector('input[name="options"]:checked').checked = false;

    console.log(" -----END OF ROUND----- ");
  })
);

// * round result
// a) output
// b) total rounds and current round +1

const resultOutput = (result) => {
  document.getElementById("resultOutput").innerHTML = result;
};

// * restart
