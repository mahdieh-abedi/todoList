// const newTodoKeypress = document.getElementById("todo__input")


// newTodoKeypress.addEventListener("keypress", function createTodo() {
//     const newTodoKeypress = document.getElementById("todo__input");
//     keypressList.push(newTodoKeypress)
//     return keypressList
// });

// const keypressList = []
//
// function creatTodoList(){
//     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//     const input = document.getElementById("userInput").value;
//     keypressList.push(input)
// }
// ;

// console.log([...keypressList])


//
// document.onkeydown = function (event) {
//     let keyPress;
//     if (typeof event !== 'undefined') {
//         keyPress = event.keyCode;
//     }
//     else if (event) {
//         keyPress = event.which;
//     }
//     keypressList.push(String.fromCharCode(keyPress));
//     return false;
// };


// const newTodoClick = document.getElementById("todo__btn")

// function createTodo() {
//     const newTodoKeypress = document.getElementById("todo__input");
//     keypressList.push(newTodoKeypress)
//     return keypressList
// }


// const clickList=[]

//
// newTodoClick.addEventListener("click", function () {
//     clickList.values.push()
//     return clickList
// });


// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

const parent = document.getElementById("main__list")
const clickList = []

function addByClick() {
    let clickTodo = document.createElement("li");
    parent.appendChild(clickTodo);
    return clickTodo.push(clickList);
}
console.log(clickList)
// const enterList = []
//
// function addByEnter() {
//     let enterTodo = document.getElementById("todo__input").value;
//     document.getElementById("list__todo").innerHTML = enterTodo;
//     clickList.push(enterTodo)
// }










