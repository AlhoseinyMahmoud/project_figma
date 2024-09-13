let head = document.querySelector("head");
let input = document.querySelector("input");
let ol = document.querySelector("ol")
head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`
head.innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

let tasks = [];
function rendertask(){
    ol.innerHTML = "";
    tasks.forEach((el,index) => {
        ol.innerHTML += `<div class="d-flex justify-content-between py-3 text-white border-bottom">
        <li class="" contenteditable="false">${el.name}</li>
        <div> 
        <button class="btn btn-primary" onclick="EditTask()"}><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn btn-danger" onclick="deletetask()"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>`;
    });
};
rendertask()
console.log(tasks)
function Addtask(){
    let valTask = input.value;
    let objTask = {
        name : valTask,
        stats:false,
        isedit: false,
    }
    tasks.push(objTask);
    rendertask();
}
function deletetask(index){
    tasks.splice(index,1);
    rendertask();
};
 deletetask()

function EditTask(index) {
    const newTaskName = prompt("Enter new task name:");
    if (newTaskName !== null && newTaskName.trim() !== "") {
        tasks[index].name = newTaskName; 
        rendertask();
    }
}
rendertask();

