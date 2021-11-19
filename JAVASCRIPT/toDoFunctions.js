const listView = document.getElementById(`list__view`)
const keyInput = document.getElementById(`todo__input`)
const clickInput = document.getElementById('create__todo')
const categoryM = document.getElementById('list__mobile')
const categoryD=document.getElementById('list__desktop')
const clearCompleted=document.getElementById('clear__completed')
let todoList = JSON.parse(localStorage.getItem('myTodo')) || []

listView.innerHTML = generateTodoCard(todoList)

keyInput.addEventListener(`keyup`, (event) => {
    if (event.key === `Enter`) {
        submitTodo(event.target)
        event.target.value = ""
    }
});

clickInput.addEventListener('click', (event) => {
    if (event.target.id === 'todo__btn') {
        let clickTodo = document.getElementById('todo__input')
        submitTodo(clickTodo)
        clickTodo.value = ""
    }
});

function TodoInfo(number, description, complete) {
    this.number = number
    this.description = description;
    this.complete = complete;
}


function submitTodo(event) {
    let newTodoInfo = new TodoInfo((todoList.length), (event.value), false)
    todoList.push(newTodoInfo)
    localStorage.setItem('myTodo', JSON.stringify(todoList))
    listView.innerHTML = generateTodoCard(todoList)
    countItems(todoList)
}

function createTodo(obj) {
    return (`
       <div title="${obj.number}" id="list__todo" draggable="true">
          <div title="${obj.number}" id="check" class="${obj.complete}">
              <button title="${obj.number}" id="check__btn">
                 <img src="../IMAGE/icon-complete.png" alt="complete">
              </button>
              <span title="${obj.number}" id="description"> ${obj.description} </span>
          </div>
          <button title="${obj.number}" id="delete__btn"></button>
       </div>
    `)
}

function generateTodoCard(infoList) {
    return (infoList.map((item) => {
            return (createTodo(item))
        })
    ).join(" ")
}


listView.addEventListener(`click`, (event) => {
    let todoNo = event.target.attributes[0].value
    if (event.target.id === 'delete__btn') {
        removeTask(todoNo)
    }
    if (event.target.id === 'check__btn' || event.target.id === 'description') {
        event.target.parentElement.classList.toggle('true')
        completeTask(todoNo)
    }

});

function removeTask(todoNo) {
    todoList = todoList.filter((task) => task.number !== parseInt(todoNo));
    localStorage.setItem('myTodo', JSON.stringify(todoList));
    listView.innerHTML = generateTodoCard(todoList)
    countItems(todoList)
}

function completeTask(todoNo) {
    let arr = todoList.filter((task) => task.number === parseInt(todoNo))
    if (arr[0].complete === false) {
        arr[0].complete = true
        localStorage.setItem('myTodo', JSON.stringify(todoList))
        listView.innerHTML = generateTodoCard(todoList)


    } else {
        arr[0].complete = false
        localStorage.setItem('myTodo', JSON.stringify(todoList));
        listView.innerHTML = generateTodoCard(todoList)
    }
    countItems(todoList)
}

categoryM.addEventListener('click',(event)=> {
    if (event.target.id === 'mobile__completed') {
        let completed = todoList.filter((task) => task.complete === true)
        listView.innerHTML = generateTodoCard(completed)
    }
    if (event.target.id === 'mobile__active' ){
        let active = todoList.filter((task) => task.complete === false)
        listView.innerHTML = generateTodoCard(active)
    }
    if (event.target.id === 'mobile__all') {
        localStorage.setItem('myTodo', JSON.stringify(todoList))
        listView.innerHTML = generateTodoCard(todoList)
    }
})
categoryD.addEventListener('click',(event)=> {
    if (event.target.id === 'desktop__completed') {
        let completed = todoList.filter((task) => task.complete === true)
        listView.innerHTML = generateTodoCard(completed)
    }
    if (event.target.id === 'desktop__active') {
        let active = todoList.filter((task) => task.complete === false)
        listView.innerHTML = generateTodoCard(active)
    }
    if (event.target.id === 'desktop__all') {
        localStorage.setItem('myTodo', JSON.stringify(todoList))
        listView.innerHTML = generateTodoCard(todoList)
    }
})

clearCompleted.addEventListener('click',()=> {
    todoList = todoList.filter((task) => task.complete === false);
    localStorage.setItem('myTodo', JSON.stringify(todoList));
    listView.innerHTML = generateTodoCard(todoList)
    countItems(todoList)
})

function countItems(arr) {
    let count = document.getElementById('count__active')
    let activeTask = arr.filter((task) => task.complete === false)
    count.innerHTML = activeTask.length.toString() + " " + "items left"
}

countItems(todoList)