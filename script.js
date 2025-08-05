function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed", checkbox.checked);
  });

  const taskLabel = document.createElement("label");
  taskLabel.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✕";
  deleteBtn.onclick = () => taskList.removeChild(li);

  taskSpan.appendChild(checkbox);
  taskSpan.appendChild(taskLabel);

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  input.value = "";
}