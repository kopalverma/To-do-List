let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let input = document.querySelector("input");
    let li  = document.createElement("li");
    let delBtn  = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "delete";
    li.innerText = input.value;
    input.value = "";
    ul.appendChild(li);
    li.appendChild(delBtn);
});

// Delegate the event handling to the parent element 'ul'
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});
