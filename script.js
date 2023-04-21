let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScore();

  function playGame(playerMove) {
    const computerMove = pickComputerMove(); /* function call for picking */
    let result = "";
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You Lose.";
      } else if (computerMove === "paper") {
        result = "You Win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You Win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You Lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You Lose.";
      } else if (computerMove === "scissors") {
        result = "You Win.";
      }
    }

    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You Lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    
    localStorage.setItem("score", JSON.stringify(score));
    
    updateScore();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-move')
    .innerHTML = `You <img class="result-img" src="images/${playerMove}-emoji.png" alt="">-Computer <img class="result-img" src="images/${computerMove}-emoji.png" alt="">`
   
  }

  // function to pick computer move
  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
    console.log(computerMove);

    return computerMove;
  }
  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }