// second way

// let dragSrcEl = null;
// let items = document.querySelectorAll("#list__view .list__todo");
// [].forEach.call(items, addDnDHandlers);
//
// function dragStart(e) {
//     this.style.opacity = "0.4";
//     dragSrcEl = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.outerHTML);
// }
//
// function dragEnd(e) {
//     this.style.opacity = "1";
//     [].forEach.call(items, function (item) {
//         item.classList.remove('over');
//     })
// }
//
// function dragOver(e) {
//     if(e.preventDefault){
//         e.preventDefault();
//     }
//     this.classList.add("over");
//     e.dataTransfer.dropEffect = "move";
//     return false;
// }
//
// function dragEnter(e) {
//     this.classList.add("over");
// }
//
// function dragLeave(e) {
//     this.classList.remove("over");
// }
//
// function drop(e) {
//     if(e.stopPropagation) {
//         e.stopPropagation();
//     }
//     if (dragSrcEl !== this) {
//         this.parentNode.removeChild(dragSrcEl);
//         let dropHTML = e.dataTransfer.getData("text/html");
//         this.insertAdjacentHTML("beforebegin", dropHTML);
//         let dropElem = this.previousSibling;
//         addDnDHandlers(dropElem);
//     }
//     this.classList.remove("over");
//     return false;
// }
//
// function addDnDHandlers(item){
//     item.addEventListener("dragstart", dragStart);
//     item.addEventListener("dragenter", dragEnter);
//     item.addEventListener("dragover", dragOver);
//     item.addEventListener("dragleave", dragLeave);
//     item.addEventListener("drop", drop);
//     item.addEventListener("dragend", dragEnd);
// }

//first way

// document.addEventListener('DOMContentLoaded',(event)=> {})
// function dragStart(e) {
//     this.style.opacity = "0.4";
//     dragSrcEl = this;
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("div/html", this.innerHTML);
// }
// function dragEnd(e) {
//     this.style.opacity = "1";
//     let listItems = document.querySelectorAll(".draggable");
//     [].forEach.call(listItems, function (item) {
//         item.classList.remove("over");
//     });
// }
// function dragEnter(e) {
//     this.classList.add("over");
// }
// function dragOver(e) {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//     return false;
// }
// function dragLeave(e) {
//     e.stopPropagation();
//     this.classList.remove("over");
// }
// function dragDrop(e) {
//     if (dragSrcEl != this) {
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData("text/html");
//     }
//     return false;
// }
// function addEventsDragAndDrop(el) {
//     el.addEventListener("dragstart", dragStart, false);
//     el.addEventListener("dragenter", dragEnter, false);
//     el.addEventListener("dragover", dragOver, false);
//     el.addEventListener("dragleave", dragLeave, false);
//     el.addEventListener("drop", dragDrop, false);
//     el.addEventListener("dragend", dragEnd, false);
// }
// let listItems = document.querySelectorAll(".draggable");
// [].forEach.call(listItems, function (item) {
//     addEventsDragAndDrop(item);
// });
// function addNewItem() {
//     let newItem = document.querySelector(".input").value;
//     if (newItem != "") {
//         document.querySelector(".input").value = "";
//         let li = document.createElement("li");
//         let attr = document.createAttribute("draggable");
//         let ul = document.querySelector("ul");
//         li.className = "draggable";
//         attr.value = "true";
//         li.setAttributeNode(attr);
//         li.appendChild(document.createTextNode(newItem));
//         ul.appendChild(li);
//         addEventsDragAndDrop(li);
//     }
// }
// btn.addEventListener("click", addNewItem);