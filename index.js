// const student = {};
 // //const studentData = new Object();
 
 // student['name'] = 'Chika';
 // student.age = 34;
 // student['department'] = 'Computer Engineering';
 // console.log('The name of the student is ' + student.name);
 // console.log(The age of the student is ${student.age} \n the department is ${student.department});
 // console.log(student);
 
 //New line
 window.addEventListener("DOMContentLoaded", (event) => {
    const taskName = document.getElementById("task-name");
    const taskDescription = document.getElementById("task-description");
    const button = document.getElementById("add-todo");
    const listContainer = document.getElementById("lists");
  
    const taskArray = [
    //   { nameOfTask: "fetch water", taskDescription: "Fetch it from the well" },
    //   { nameOfTask: "cook food", taskDescription: "try cook rice" },
    //   { nameOfTask: "cook meat", taskDescription: "make it spicy" },
    ];
  
    const addTodo = () => {
      if (taskName.value === "" || taskDescription.value === "") {
        alert("Please fill this form!");
        return;
      }
      const newTask = {
        taskId :taskArray.index + 1,
        nameOfTask: taskName.value,
        taskDescription: taskDescription.value,
      };
  
      taskArray.push(newTask);
      console.log(taskArray.length);
      taskName.value = "";
      taskDescription.value = "";
      return
    }
  
    const displayTodo = () => {
      listContainer.innerHTML = ''
      const li = document.createElement("li");
      for (let index = 0; index <= taskArray.length; index++) {
        const itemDiv = document.createElement("div");
        const li = document.createElement("li");
        itemDiv.setAttribute("class", "item");
        li.setAttribute("class", "todo-item");
        const deleteBtn = document.createElement("button");
        deleteBtn.addEventListener('click',deleteTask)
        const editBtn = document.createElement("button");
        editBtn.addEventListener('click',editTask)
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "delete";
        deleteBtn.className = "delete";
        itemDiv.className = "item";
        li.textContent = taskArray[index].nameOfTask;
        listContainer.appendChild(itemDiv);
        itemDiv.appendChild(li);
        itemDiv.appendChild(editBtn);
        itemDiv.appendChild(deleteBtn);
        listContainer.appendChild(itemDiv);
      }
    }

    function deleteTask(event){
      debugger
        let index = taskArray.findIndex(m=>m.taskId == event.target.taskId)
        taskArray.splice(index,1)
        displayTodo()
    }

    function editTask(event){
      debugger;
      let index = taskArray.findIndex(m=>m.taskId == event.target.taskId)
      document.getElementById("lists").taskName, taskDescription.value;


      taskArray.splice(index,1)
      taskArray.editTask.taskNameindex + 1,
      addTodo(taskName.value);
    }
  
    button.addEventListener("click", () => {
      addTodo()
      displayTodo()
    });
  });