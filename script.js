'use strict';
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// functions
function addTodo(e) {
  e.preventDefault();
  //   console.log('Hello');
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //appendChild will bind newTodo to parent element todoDiv

  // check box button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  // Delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // append whole
  todoList.append(todoDiv);

  // clear input field after submitting
  todoInput.value = '';
  //   <div class="todo">
  //   <li class="todo-item">Helllo</li>
  // </div>
}
function deleteCheck(e) {
  const item = e.target;

  if (item.classList.contains('trash-btn')) {
    // console.log('lorem ipsum');
    const todo = item.parentElement;
    todo.classList.add('fall');
    //after transition remove todo
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList.contains('complete-btn')) {
    // console.log('lorem ipsum');
    item.parentElement.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  //   console.log(e.target);
  todos.forEach(function (todo) {
    // console.log(todo);
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}
