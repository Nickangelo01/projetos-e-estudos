const form = document.getElementById('form')
input = document.getElementById('input-tarefas')
todosUL = document.getElementById('todos')
clearButton = document.getElementById('limpar')
pendingNum = document.getElementsByClassName('pending-num')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos){
    todos.forEach(todo => addTodo(todo))
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

    if (todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS(){
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach( todoEl=> {
        todo.push({
            text: todoEl.innerText,
            completed: todoEl.classList.cotains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

//add a função do botão de limpar
clearButton.addEventListener('click', ()=> {
    todosUL.innerHTML = ''
    todoEl()
})
//parte do codigo que vai adicionar o numero de atividades pendentes 
function allTasks(){

}