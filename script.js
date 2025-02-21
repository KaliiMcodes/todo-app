function showTab(category) {
    document.getElementById("personalTasks").classList.add("hidden");
    document.getElementById("professionalTasks").classList.add("hidden");
    
    document.getElementById(category + "Tasks").classList.remove("hidden");

    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelector(`.tab[onclick="showTab('${category}')"]`).classList.add("active");
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let category = document.querySelector(".tab.active").textContent.toLowerCase();
    let taskList = category === "personal" ? document.getElementById("personalList") : document.getElementById("professionalList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("circle-checkbox");

    checkBox.onclick = function () {
        li.classList.toggle("completed");
    };

    let taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

function clearCompleted(listId) {
    let taskList = document.getElementById(listId);
    let tasks = taskList.getElementsByTagName("li");

    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].classList.contains("completed")) {
            taskList.removeChild(tasks[i]);
        }
    }
}
