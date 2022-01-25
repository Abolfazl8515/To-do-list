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
  for (const icon of icons) {
    icon.classList.add("hidden");
  }
};

const compleateTaskHandler = (id) => {
  const compleatingTask = document.getElementById(`${id}`);
  compleatingTask.className = "Completed";
  compleatingTask.firstElementChild.innerHTML = `<del>${compleatingTask.firstElementChild.innerHTML}</del>`;
  compleatingTask.lastElementChild.remove();
};

const filteringTasks = () => {
  const tasks = document.querySelectorAll(".task");
  if (filterTasks.value == 0) {
    const tasksEl = document.querySelector(".tasks");
    for (const task of tasksEl.children) {
      task.style = "";
    }
  } else if (filterTasks.value == 1) {
    for (const task of tasks) {
      if (task.className == "task") {
        task.style.display = "none";
      } else {
        return;
      }
    }
  } else if (filterTasks.value == 2) {
    const tasksEl = document.querySelector(".tasks");
    for (const task of tasksEl.children) {
      if (task.className == "task") {
        task.style = "";
      } else {
        task.style.display = "none";
      }
    }
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
                      <i class="bi bi-clipboard-check complete-Task" onclick="compleateTaskHandler(${idTask})"></i>
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
filterTasks.addEventListener("change", filteringTasks);
