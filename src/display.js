function displaynewProject(project, sidebar){
    projectName = project.name
    const projectdiv = document.createElement("div")
    projectdiv.addEventListener('click', ()=>{

    })
    projectdiv.innerText = projectName;

    sidebar.appendChild(projectdiv)
}

function displaynewTask(content, todo,project){
    const task = document.createElement('div')
    const done = document.createElement('div')
    done.classList.add('box')
    done.innerText = "pending"

    const tasktext = document.createElement('div')
    tasktext.innerText =`${todo.title}   ${todo.dueDate}`
    const edit = document.createElement('button')

    edit.innerText ='edit'
    const deletebtn = document.createElement('button');

    deletebtn.innerText = 'x'
    deletebtn.addEventListener('click',()=>{
        content.removeChild(deletebtn.parentNode);
        console.log(project);
        console.log(todo)
        project.projectlist.splice(project.projectlist.findIndex((element)=>element===todo),1)

        console.log(project)
    })

    done.addEventListener('click',()=>{
        todo.setDone();
        console.log(todo.getDone())
        //console.log(todo.setDone())
        if(todo.getDone()){
            done.innerText = 'done'
        }
        else{
            done.innerText = 'pending'
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
        savebtn.classList.add()
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
            tasktext.innerText =`${todo.title}   ${todo.dueDate}`
        })
    })
    task.appendChild(done)
    task.appendChild(tasktext)
    task.appendChild(edit)
    task.appendChild(deletebtn)
    content.appendChild(task)
}

