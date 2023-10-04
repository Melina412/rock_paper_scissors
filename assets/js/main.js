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

let total_rounds = 5; //

radio_rounds.forEach((button) => {
  button.addEventListener("change", () => {
    total_rounds = Number(
      document.querySelector('input[name="rounds"]:checked').value
    );
    // roundOutput();
  });
});

// const roundOutput = () => {
//   document.getElementById("totalRounds").innerHTML = total_rounds;
// };
let current_round = 1;
console.log({ total_rounds });

// - style
//
// "this" bezieht sich auf den radio button, auf dem das change event stattfindet
// geht nur mit function(){...}, [nicht mit arrow function => {...}]
radio_rounds.forEach((button) => {
  button.addEventListener("change", function () {
    const label = document.querySelector(`label[for="${this.id}"]`);
    document.querySelectorAll(".rounds-section label").forEach((label) => {
      label.classList.remove("checked");
    });
    label.classList.add("checked");
  });
});

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

    // hide round number selection
    document.querySelectorAll(".hide").forEach((element) => {
      element.style.display = "none";
    });

    // display round number and score
    document.querySelectorAll(".hidden").forEach((div) => {
      div.style.display = "block";
    });

    // show current and total rounds:
    // document.getElementById("currentRound").innerHTML = current_round;
    // # oder:
    roundsOutput(`${current_round} / ${total_rounds}`);

    console.log({ current_round });

    // show user and computer choice
    userChoice(user_choice);
    computerChoice(computer_choice);

    setTimeout(() => {
      // updates score & round result after animation is finished
      if (user_choice === computer_choice) {
        // result: draw
        resultOutput(
          `<p>${user_choice} vs. ${computer_choice},</p> <span>it's a draw...</span>`
        );
        //
        user_score++; // user score +1
        computer_score++; // computer score +1
        //
      } else if (
        (user_choice === "rock" && computer_choice === "scissors") ||
        (user_choice === "paper" && computer_choice === "rock") ||
        (user_choice === "scissors" && computer_choice === "paper")
      ) {
        // result: user wins
        resultOutput(
          `<p>${user_choice} beats ${computer_choice},</p> <span>you win!</span>`
        );
        //
        user_score++; // user score +1
        //
      } else {
        // result: computer wins
        resultOutput(
          `<p>${computer_choice} beats ${user_choice},</p> <span>computer wins!</span>`
        );
        //
        computer_score++; // computer score +1
      }

      // console.log({ current_round });
      console.log({ total_rounds });
      console.log({ user_score });
      console.log({ computer_score });

      // score output
      scoreOutput(`${user_score} : ${computer_score}`);

      // setzt user auswahl zurück, um erneut auswahl treffen zu können
      document.querySelector('input[name="options"]:checked').checked = false;
      console.log(" -----END OF ROUND----- ");
    }, 900);

    if (current_round === total_rounds) {
      // game over
      // hide div game options
      setTimeout(() => {
        document.getElementById("optionsDiv").style.display = "none";

        const game_over_text = document.getElementById("gameOver");
        game_over_text.style.display = "block";
        //
        //
        //
        // display div end result
        if (user_score > computer_score) {
          endResultOutput("you win!");
          game_over_text.style.color = "teal";
        } else if (user_score < computer_score) {
          endResultOutput("computer wins!");
          game_over_text.style.color = "crimson";
        } else {
          endResultOutput("it's a draw!");
          game_over_text.style.color = "ghostwhite";
        }
      }, 900);
    } else if (current_round < total_rounds) {
      document.getElementById("gameOver").style.display = "none";
    }

    current_round++; // round +1
  })
);

// * user vs computer choice images

const userChoice = (img) => {
  document.getElementById("userImage").src = `./assets/img/${img}.png`;
};

const computerChoice = (img) => {
  document.getElementById("computerImage").src = `./assets/img/${img}.png`;
};

//
// * score output

const scoreOutput = (score) => {
  document.getElementById("scoreOutput").innerHTML = score;
};

//
// * rounds

const roundsOutput = (rounds) => {
  document.getElementById("roundsOutput").innerHTML = rounds;
};

//
// * round result output

const resultOutput = (result) => {
  document.getElementById("resultOutput").innerHTML = result;
};

//
// * end result output

const endResultOutput = (end_result) => {
  document.getElementById("endResult").innerHTML = end_result;
};

// * animation

const shaking_images = document.querySelectorAll(".img-container");

radio_options.forEach((button) => {
  button.addEventListener("change", () => {
    shaking_images.forEach((img) => {
      img.style.animation = "none";
      // animation zunächst zurücksetzten
      setTimeout(() => {
        // setTimeout: starten der Animation immer nach 10 ms
        img.style.animation = "shake 0.3s ease-in-out 3";
      }, 10);
    });
  });
});

// emoji animation idee (nicht fertig)

// const emojis = ["😢", "😞", "😭"];
// const container = document.querySelector(".emojis-container");
// let emojiCount = 0;
// const maxEmojis = 10;

// function createEmoji() {
//   if (emojiCount >= maxEmojis) {
//     return; // Beende die Funktion, wenn die maximale Anzahl erreicht ist
//   }
//   const emoji = document.createElement("div");
//   emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
//   emoji.className = "emoji";

//   // Zufällige Position zwischen 0 und 100vw für horizontalen Raum
//   let x = Math.random() * 100;

//   // Zufällige Position zwischen 0 und 100vh für vertikalen Raum
//   let y = Math.random() * 100;

//   emoji.style.left = `${x}vw`;
//   emoji.style.top = `${y}vh`;

//   container.appendChild(emoji);

//   emoji.addEventListener("animationiteration", () => {
//     emoji.remove();
//     emojiCount--;
//   });

//   // Starte die Animation nach einer kurzen Verzögerung, um sicherzustellen, dass das Emoji gerendert wurde

//   setTimeout(() => {
//     emoji.style.animation = "fly linear infinite";
//   }, 10);
// }

// loop
// setInterval(createEmoji, 500);
