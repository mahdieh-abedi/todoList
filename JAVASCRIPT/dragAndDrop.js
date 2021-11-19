const range = document.getElementById("list__todo")
dragElement(range)

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(element.id + "Drag")) {
        document.getElementById(element.id + "Drag").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(a) {
        a = a || window.addEventListener("mousedown", this.window);
        a.preventDefault();
        pos3 = a.clientX;
        pos4 = a.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(b) {
        b = b || window.addEventListener("mousedown", this.window);
        b.preventDefault();
        pos1 = pos3 - b.clientX;
        pos2 = pos4 - b.clientY;
        pos3 = b.clientX;
        pos4 = b.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

