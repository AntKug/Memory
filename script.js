const array = ["🍎", "🍌", "🍇", "🍒", "🍎", "🍌", "🍇", "🍒"];
const gameArray = [...array, ...array];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(gameArray);

const buttons = document.querySelectorAll("#board button");
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;
const totalPairs = gameArray.length / 2;
const h2 = document.querySelector("h2");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (lockBoard || button.classList.contains("matched")) return;

    const span = button.querySelector("span");
    span.textContent = gameArray[index];
    button.classList.add("revealed");
    button.disabled = true;

    if (!firstCard) {
      firstCard = { button, span, value: gameArray[index] };
    } else if (!secondCard) {
      secondCard = { button, span, value: gameArray[index] };
      lockBoard = true;

      setTimeout(() => {
        if (firstCard.value === secondCard.value) {
          firstCard.button.classList.add("matched");
          secondCard.button.classList.add("matched");
          matches++;
        } else {
          firstCard.button.classList.remove("revealed");
          secondCard.button.classList.remove("revealed");
          firstCard.span.textContent = "";
          secondCard.span.textContent = "";
          firstCard.button.disabled = false;
          secondCard.button.disabled = false;
        }
        firstCard = null;
        secondCard = null;
        lockBoard = false;

        if (matches === totalPairs) {
          h2.textContent = "Gratulacje! Wygrałeś!";
        }
      }, 1000);
    }
  });
});
