
let closed = true;
let sel_obj;
let value;

function ShowBar() {
    sel_obj = document.getElementById("bar_icon");
    if (closed) {
        closed = false;
        value = "none";
    } else {
       
        closed = true;
        value = "block";
    } 
    sel_obj.style.display = value;
}

