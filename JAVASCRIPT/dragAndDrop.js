// second way

let dragSrcEl = null;
let items = document.querySelectorAll("#list__view .list__todo");
[].forEach.call(items, addDnDHandlers);

function dragStart(e) {
    this.style.opacity = "0.4";
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragEnd() {
    this.style.opacity = "1";
    [].forEach.call(items, function (item) {
        item.classList.remove('over');
    })
}

function dragOver(e) {
    if(e.preventDefault){
        e.preventDefault();
    }
    this.classList.add("over");
    e.dataTransfer.dropEffect = "move";
    return false;
}

function dragEnter() {
    this.classList.add("over");
}

function dragLeave() {
    this.classList.remove("over");
}

function drop(e) {
    if(e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl !== this) {
        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData("text/html");
        this.insertAdjacentHTML("beforebegin", dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);
    }
    this.classList.remove("over");
    return false;
}

function addDnDHandlers(item){
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", drop);
    item.addEventListener("dragend", dragEnd);
}
