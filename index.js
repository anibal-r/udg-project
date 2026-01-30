// für JS hab ich KI gefragt: Ich bin neu in JavaScript. Erkläre mir wie ich den Event Listener, DOM-Manipulation, localStorage für Persistenz und Time mit setInterval einbaue.
// Aber sag mir nicht wie. Stattdessen gib mir Hinweise damit ich die Sachen selber nachlesen kann.
// Also gib mir für JavaScript eher einen Leitfaden.

var storageForTask = [];

const form = document.querySelector("form");
const inputField = document.querySelector("#user-task");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userInput = inputField.value.trim();
  if (userInput === "") //kein leerer Task
    return;

  AddUserTask(userInput);
  storageForTask.push(userInput);

  inputField.value = "";
});

function AddUserTask(userInput) {
  const tbody = document.querySelector("#task-table tbody");
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.textContent = userInput;
  tr.appendChild(td);
  tbody.appendChild(tr);
}