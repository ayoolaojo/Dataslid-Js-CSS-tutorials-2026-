

const todoInput = document.getElementById('todo-input');

const addTodoBtn = document.getElementById('add-todoBtn');
const deleteBtn = document.getElementById('delBtn');

const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', ()=> {
  
    const todoText =  todoInput.value;
    const li = document.createElement('li')
    li.innerText = todoText

    todoList.appendChild(li)

    todoInput.value = ''


}) 

deleteBtn.addEventListener('click', ()=> {
    todoList.removeChild(todoList.lastChild)
})