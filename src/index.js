import './style.css';
import {Project, todo} from "./project.js"
import { compareAsc, format, isToday } from "date-fns";

const current_project_div = document.getElementById('currentproject')
//new project divs
const newproject = document.getElementById('newproject')
const projectDialog = document.getElementById('project')
const projec_close= document.getElementById('close_project')
const projec_confirm= document.getElementById('confirm_project')
const project_name= document.getElementById('project_name')
const sidebar = document.getElementById('sidebar')
//content divs
const divtasks = document.querySelector("#task");
const newTaskbtn = document.querySelector('#newtask')

const defaultProject = new Project('Default');
let applist = [defaultProject];
displaynewProject(defaultProject,sidebar);

let current_project = defaultProject;

current_project_div.innerText = `${current_project.name}`


newproject.addEventListener('click',()=>{projectDialog.showModal()})
projec_close.addEventListener('click', ()=>{projectDialog.close()})
projec_confirm.addEventListener('click', (event)=>{
    const errorMessagesDiv = document.getElementById('errorMessages');
    event.preventDefault(); // We don't want to submit this fake form
    errorMessagesDiv.innerHTML = '';
    if(project_name.value.trim()==''){
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Project Name is required.`;
        errorMessagesDiv.appendChild(errorMessage);
    }
    else{
    addproject(project_name.value)
    projectDialog.close();}
})

function addproject(name){
    console.log(applist)
    let project_to_add = new Project(name)
    applist.push(project_to_add);
    displaynewProject(project_to_add,sidebar)
    console.log(applist)
}

function deleteProject(project){
    applist.splice(applist.findIndex((element)=>element===project),1);
    console.log(current_project===project)
}


function renderProject(project){
    project.projectlist.forEach(todo => {
        displaynewTask(divtasks,todo,project)

    });
}


function displaynewProject(project, sidebar){
    let projectName = project.name
    const projectmain = document.createElement("div")
    const projectdiv = document.createElement("div")
    projectdiv.addEventListener('click', ()=>{
        divtasks.innerHTML = '';
        renderProject(project)
        current_project = project
        current_project_div.innerText = `${current_project.name}`

    })

    projectdiv.innerText = projectName;

    projectmain.appendChild(projectdiv)

    if(project!==defaultProject){
        const deleteprojectbtn = document.createElement('div')
        const deletesvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"/></svg>'
    deleteprojectbtn.innerHTML = deletesvg

    deleteprojectbtn.classList.add('removeProject');

    deleteprojectbtn.addEventListener('click',()=>{
        deleteProject(project);
        sidebar.removeChild(projectmain)
        if(current_project===project){
            current_project = defaultProject
            console.log(current_project)
            current_project_div.innerText = `${current_project.name}`
            divtasks.innerHTML = '';
            renderProject(defaultProject)
        }
    })
    projectmain.appendChild(deleteprojectbtn)
    }
    

    sidebar.appendChild(projectmain)
}

//import{displaynewTask, updatetext} from "./display.js"




//dialog divs for todo
const todoDialog = document.getElementById('todo');
const todotitle = document.getElementById('title')
const tododescription = document.getElementById('description')
const tododate = document.getElementById('date')
const todopriority = document.getElementById('priority')
const confirmBtn = document.querySelector("#confirm");
const close = document.querySelector("#close");
const closediv = document.querySelector("#close-div");
const todoForm = document.querySelector("#todo-form");






newTaskbtn.addEventListener('click', ()=>{
    todoDialog.showModal();
})

/*function editTask(todo){
    todotitle.value = todo.title;
    tododate.value = todo.dueDate;
    tododescription.value = todo.description
    todopriority.value = todo.priority
    //remove confirm button and add save button
    todoForm.removeChild(confirmBtn)
    closediv.removeChild(close)
    
    const savebtn = document.createElement('button')
    savebtn.innerText = 'save'
    todoDialog.appendChild(savebtn)
    todoDialog.showModal();
    

    savebtn.addEventListener('click',()=>{
        todo.setTitle(todotitle.value);
        todo.setDescription(tododescription.value)
        todo.setDate(tododate.value)
        todo.setPriority(todopriority.value)
        todoDialog.close();

        todoForm.appendChild(confirmBtn)
        todoDialog.removeChild(savebtn)
        closediv.prepend(close)
    })
    
    
}*/


confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const errortitle = document.getElementById('errortitle');
    const errordescription = document.getElementById('errordescription');
    const errordate = document.getElementById('errordate');
   
    errortitle.innerHTML, errordescription.innerHTML, errordate.innerHTML = ''

    if(todotitle.value.trim()===''){
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `title is required.`;
        errortitle.appendChild(errorMessage);
    }

    else if(tododescription.value.trim()===''){
        errortitle.innerHTML = ''
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `description is required.`;
        errordescription.appendChild(errorMessage);
    }

    else if(tododate.value.trim()===''){
        errortitle.innerHTML = ''
        errordescription.innerHTML = ''
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `date is required.`;
        errordate.appendChild(errorMessage);
    }

    else{
        errortitle.innerHTML = ''
        errortitle.innerHTML = ''
        errordescription.innerHTML = ''

    addNewTask();
    todoDialog.close();}
  });

close.addEventListener('click',()=>{
    todoDialog.close()
})

function addNewTask(){
    let todo_to_add=new todo(todotitle.value,tododate.value,tododescription.value,todopriority.value)
    current_project.addToList(todo_to_add)
    console.log(current_project)
    displaynewTask(divtasks,todo_to_add,current_project)
}

function displaynewTask(content, todo,project){
    const task = document.createElement('div')
    task.classList.add('task');

    function formatpriority(todo,task){
    if(todo.priority==='low'){
        task.classList.remove('medium')
        task.classList.remove('high')
        task.classList.add('low')
    }

    else if(todo.priority==='medium'){
        task.classList.remove('low')
        task.classList.remove('high')
        task.classList.add('medium')
    }
    else{
        task.classList.remove('low')
        task.classList.remove('medium')
        task.classList.add('high')
    }}

    formatpriority(todo,task);
    
    const done = document.createElement('div')
    const svgempty = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" stroke="green"  stroke-width="5"/>'
    const svgcode = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" stroke="green"  stroke-width="5"/><path fill="#1bda3b" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg>'
    if(todo.getDone()){
        done.innerHTML = svgcode
    }
     else{
        done.innerHTML = svgempty
     }

    const tasktitletext = document.createElement('div')
    tasktitletext.innerText =`${todo.title}`

    const taskdueDatetext = document.createElement('div')
    taskdueDatetext.innerText =`Due: ${todo.dueDate}`

    const edit = document.createElement('div')
    const editsvg ='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>'
    edit.innerHTML = editsvg
    const deletebtn = document.createElement('div');

    const deletesvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"/></svg>'
    deletebtn.innerHTML = deletesvg
    deletebtn.classList.add('removetodo')

    deletebtn.addEventListener('click',()=>{
        content.removeChild(deletebtn.parentNode);
        project.deleteFromList(todo)
    })

    done.addEventListener('click',()=>{
        todo.setDone();
        if(todo.getDone()){
            done.innerHTML = svgcode
            task.classList.add('done')
        }

        else{
            done.innerHTML = svgempty
            task.classList.remove('done')
        }
    }
    )

    edit.addEventListener('click',()=>{
        todotitle.value = todo.title;
        tododate.value = todo.dueDate;
        tododescription.value = todo.description
        todopriority.value = todo.priority
        //remove confirm button and add save button
        todoForm.removeChild(confirmBtn)
        closediv.removeChild(close)
        
        const savebtn = document.createElement('button')
        savebtn.innerText = 'save'
        todoDialog.appendChild(savebtn)
        todoDialog.showModal();
        
    
        savebtn.addEventListener('click',()=>{
            todo.setTitle(todotitle.value);
            todo.setDescription(tododescription.value)
            todo.setDate(tododate.value)
            todo.setPriority(todopriority.value)
            todoDialog.close();
    
            todoForm.appendChild(confirmBtn)
            todoDialog.removeChild(savebtn)
            closediv.prepend(close)
            tasktitletext.innerText =`${todo.title}`
            taskdueDatetext.innerText =`Due: ${todo.dueDate}`
            formatpriority(todo,task);
        })
    })
    task.appendChild(done)
    task.appendChild(tasktitletext)
    task.appendChild(taskdueDatetext)
    task.appendChild(edit)
    task.appendChild(deletebtn)
    content.appendChild(task)
}

