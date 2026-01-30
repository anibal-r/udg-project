// für JS hab ich KI gefragt: Ich bin neu in JavaScript. Erkläre mir wie ich den Event Listener, DOM-Manipulation, localStorage für Persistenz und Time mit setInterval einbaue.
// Aber sag mir nicht wie. Stattdessen gib mir Hinweise damit ich die Sachen selber nachlesen kann.
// Also gib mir für JavaScript eher einen Leitfaden.

const inputField = document.querySelector("#user-task");

inputField.addEventListener("input", (e) => {
  console.log(e.data);
});


function saveTask(){
    var userSavedTask = localStorage.setItem(inputField);
    const table = document.getElementById("task-table");
    const tbody = document.querySelector("#task-table tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = "test";
    tr.appendChild(td);
    tbody.appendChild(tr);
}

