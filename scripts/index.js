const inputTask = document.getElementById("text-Box");
const addTask = document.querySelector(".add-Tasks");
const filterTasks = document.getElementById("filter-Tasks");
let idTask = 0;

const removeTaskHandler = (id) => {
  const removingTask = document.getElementById(`${id}`);
  removingTask.remove();
};

const addNewTitleTaskHandler = (e, id) => {
  if (e.key == "Enter") {
    const taskEdited = document.getElementById(`${id}`);
    const valueNewTitle = taskEdited.lastElementChild;
    const title = taskEdited.firstElementChild.firstElementChild;
    const icons = taskEdited.firstElementChild.nextElementSibling.children;
    title.innerHTML = valueNewTitle.value;
    valueNewTitle.remove();
    for (const icon of icons) {
      icon.classList.remove("hidden");
    }
  }
};

const editTaskHandler = (id) => {
  const editingTask = document.getElementById(`${id}`);
  editingTask.innerHTML += `<input type="text" class="newTitle" onkeypress="addNewTitleTaskHandler(event,${id})">`;
  const icons = editingTask.firstElementChild.nextElementSibling.children;
  console.log(icons);
  for (const icon of icons) {
    icon.classList.add("hidden");
  }
};

function addTaskHandler() {
  if (inputTask.value.trim() != "") {
    const tasks = document.querySelector(".tasks");
    tasks.innerHTML += `
              <div class="task" id="${idTask}">
                  <div class="title">
                      <h2>${inputTask.value}</h2>
                  </div>
                  <div class="edit">
                      <i class="bi bi-trash delete" onclick="removeTaskHandler(${idTask})"></i>
                      <i class="bi bi-pencil edit-Icon" onclick="editTaskHandler(${idTask})"></i>
                      <i class="bi bi-clipboard-check complete-Task"></i>
                  </div>
              </div> 
          `;
    idTask++;
    inputTask.value = "";
  } else {
    return;
  }
}

inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskHandler();
  }
});
addTask.addEventListener("click", addTaskHandler);
