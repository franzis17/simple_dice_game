function main() {
  const rollBtn = document.getElementById("rollBtn");
  rollBtn.addEventListener('click', function() {
    rollTwoDice();
  });
}

function rollTwoDice() {
  let playerNum = [];
  for (var i = 0; i < 2; i++) {
    // 1. roll dice number between 1 to 6
    var rolledNum = rollDie();
    playerNum[i] = rolledNum;
    
    // 2. change image of dice 1, when it is rolled, and then dice 2
    changeDiceImage((i+1), rolledNum);
  }
  displayWinner(playerNum);
}

function rollDie() {
  return getRandomNumBetween(1, 6);
}

function getRandomNumBetween(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log("Random number = " + randomNum);
  return randomNum;
}

/**
 * Change the dice's image based on the index of the dice, and the random number rolled.
 * 
 * [PARAMETERS]
 * dice_i     = index of the dice, either 1 or 2 (dice1/dice2)
 * rolledNum  = number rolled randomly between 1 to 6, simulating dice roll
 */
function changeDiceImage(dice_i, rolledNum) {
  if (dice_i < 1 || dice_i > 2) {
    console.error("Error: There should only be two dice.");
    return 0;
  }
  if (rolledNum < 1 || rolledNum > 6) {
    console.error("Error: A regular die can only be rolled from 1 to 6 my friend.");
    return 0;
  }
  document.querySelector(".diceImg" + dice_i).setAttribute(
    "src", `./images/dice${rolledNum}.png`
  );
}

function displayWinner(playerNum) {
  if (playerNum[0] > playerNum[1]) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  }
  else if (playerNum[1] > playerNum[0]) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}

main();
