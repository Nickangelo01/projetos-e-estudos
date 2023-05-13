//add variavel
const form = document.getElementById('form')
input_field =document.getElementById('input-tarefas')
toDos = document.getElementById('toDos')
clear_button = document.getElementById('limpar')
pendingNum = document.getElementById('pending-num')

const todos = JSON.parse(local.Storage.getItem('toDos'))

if (todos){
    todos.forEach( todos => addTodo(todo))
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    addTodo()

})

function addTodo(todo){
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('contextmenu', (e) =>{
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })
        toDos.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS(){
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text : todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    
    localStorage.setItem('todos', JSON.stringify(todos))
}