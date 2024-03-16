let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li1 = document.querySelectorAll("li");
btn.addEventListener("click", function() {
    let input = document.querySelector("input");
    let li  = document.createElement("li");
    let delBtn  = document.createElement("button");
    delBtn.classList.add( "delete" );
    delBtn.innerText="delete";
    li.innerText=input.value;
    console.log(input.value);
    input.value="";
    ul.appendChild(li);
    li.appendChild(delBtn);
}
);
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns)
{
    delBtn.addEventListener("click",function(){
        this.parentElement.remove();
})
}