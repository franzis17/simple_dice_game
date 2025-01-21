function main() {
  const rollBtn = document.getElementById("rollBtn");
  rollBtn.addEventListener('click', function() {
    rollTwoDice();
  });
}

function rollTwoDice() {
  console.log("Rolling two dice...");
}

main();
