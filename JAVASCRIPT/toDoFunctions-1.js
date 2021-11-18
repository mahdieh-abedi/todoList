const parent = document.getElementById("list__todo")
const clickList = []

function addByClick() {
    let clickTodo = document.createElement("label");
    parent.appendChild(clickTodo);
    return clickList.push(clickTodo);
}
console.log(addByClick())











