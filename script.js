const inputBox = document.getElementById("input-box");
const containerLista = document.getElementById("container_lista");
const containerfeitos  = document.getElementById("container_feitos")


function addTask(){
    if(inputBox.value === ''){
        alert("A caixa de texto está vazia!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        containerLista.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

containerLista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", containerLista.innerHTML)
}
function showTask(){
    containerLista.innerHTML = localStorage.getItem("data");
}
showTask();