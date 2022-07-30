let blocksRemove = document.querySelector(".blocks_remove");
let textAdd = document.querySelector(".text_add");
let btnAdd = document.querySelector(".btn_add");

function addTask() {
  btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    if (textAdd.value == '' || textAdd.value == ' ') {
      textAdd.placeholder = 'Enter the task'
    }
    else {
      textAdd.placeholder = 'Add a task';
      let li = document.createElement("li");
      li.className = "block_remove";

      const newTask = document.createElement("input");
      newTask.setAttribute("class", "text_remove");
      newTask.type = "text";
      newTask.value = textAdd.value;
      newTask.setAttribute("readonly", "readonly");
      textAdd.value = "";

      const editBtn = document.createElement("button");
      editBtn.setAttribute("class", "btn_edit");
      editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;

      const delBtn = document.createElement("button");
      delBtn.setAttribute("class", "btn_remove");
      delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

      li.appendChild(newTask);
      li.appendChild(editBtn);
      li.appendChild(delBtn);
      blocksRemove.appendChild(li);

      newTask.addEventListener('click',()=>{
        newTask.classList.toggle("done");
        if(newTask.className == "text_remove done"){
          editBtn.style.visibility = 'hidden';
        }
        else{
          editBtn.style.visibility = 'visible';
        }
      })

      editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML == `<i class="fa-solid fa-pen"></i>`) {
          newTask.removeAttribute("readonly");
          newTask.setAttribute("style", "border-bottom: 1px solid #642ffe; pointer-events: none;");
          newTask.focus();
          editBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        }
        else {
          newTask.removeAttribute("style","border-bottom: 1px solid #642ffe; pointer-events: none;");
          newTask.setAttribute("readonly", "readonly");
          editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        }
      })

      delBtn.addEventListener('click', () => {
        blocksRemove.removeChild(li);
      })
    }
  });
}

addTask();