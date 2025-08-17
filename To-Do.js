const listContainer = document.getElementById('list-container');
const todoInput = document.getElementById('todo-input');

function addTask() {
    if(todoInput.value===''){
    alert("Please enter a task.");
    }else{
        let li=document.createElement("li"); 
        li.innerHTML= todoInput.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00D7";
        li.appendChild(span);
    }
    todoInput.value = '';
saveTasks();
}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTasks();
    }else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTasks();
    }
});
function saveTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem('tasks') || '';
}
showTasks();