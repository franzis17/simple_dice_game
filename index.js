function main() {
  const rollBtn = document.getElementById("rollBtn");
  rollBtn.addEventListener('click', function() {
    rollTwoDice();
  });
}

function rollTwoDice() {
  var playerNum = [];
  for (var i = 0; i < 2; i++) {
    // 1. roll dice number between 1 to 6
    var rolledNum = rollDie();
    
    // 2. change image of dice 1, when it is rolled, and then dice 2
    changeDiceImage((i+1), rolledNum);
  }
}

function rollDie() {
  return getRandomNumBetween(1, 6);
}

function getRandomNumBetween(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Random number = " + randomNum);
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
    console.error("Error: Rolled number should only be 1 to 6 my friend.");
    return 0;
  }
  document.querySelector(".diceImg" + dice_i).setAttribute(
    "src", ("./images/dice" + rolledNum + ".png")
  );
}

main();
