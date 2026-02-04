const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");

textArea.addEventListener("input", function() {
  counter.textContent = textArea.value.length + " / 200 characters";
});
