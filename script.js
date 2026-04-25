function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Masukkan tugas dulu!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const button = document.createElement("button");
  button.innerText = "Hapus";
  button.className = "delete-btn";

  button.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(button);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
