const numberText = document.getElementById("number");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.onclick = function onIncreaseButtonClicked() {
  const current = Number(numberText.innerText);
  numberText.innerText = current + 1;
};

decreaseButton.onclick = function onDecreaseButtonClicked() {
  const current = Number(numberText.innerText);
  numberText.innerText = current - 1;
};