const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const duplArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const randomArray = array[Math.floor(Math.random() * array)];
const randomDuplArray = duplArray[Math.floor(Math.random() * duplArray)];

const buttons = document.querySelectorAll("button");
const span = document.querySelectorAll("button > span");
const h2 = document.querySelector("h2");

buttons.addEventListener("click", (event) => {
  const clickedButton = event.target;
  if (clickedButton.textContent == "") {
    span.textContent = randomArray;
  }
});

buttons.forEach(button, index) =>{
    button.addEventListener("click", (event) => {
        const clickedButton = event.target;
        if (clickedButton.textContent == "") {
          span.textContent = randomArray;
        }
      });
}