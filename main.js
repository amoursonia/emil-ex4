function clickButton() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Ajouter un événement pour supprimer la tâche en cliquant dessus
    li.addEventListener("click", function () {
      this.parentNode.removeChild(this);
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Réinitialiser le champ de texte
  } else {
    alert("Veuillez entrer une tâche.");
  }
}
document.getElementById("addTaskBtn").addEventListener("click", clickButton);

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    clickButton();
  }
});
