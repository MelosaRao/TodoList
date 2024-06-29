export class Project{
    //static no_todo = 0;
    //static incrementno_todo(){
    //    Project.no_todo++;
    //}
    constructor(name){
        this.name = name;
        this.projectlist = [];
    }

    addToList(todo){
        this.projectlist.push(todo);
        //todo.id = Project.no_todo;
        //Project.incrementno_todo();
    }

    deleteFromList(todo){
        this.projectlist.splice(this.projectlist.findIndex((element)=>element===todo),1);
    }
}

export class todo{
    constructor(title,dueDate,description,priority){
        this.title = title
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
        this.done = false
        //this.id = 0;
    }

    setTitle(title){
        this.title = title
    }

    setDate(date){
        this.dueDate = date
    }
    setDescription(description){
        this.description = description
    }
    setPriority(priority){
        this.priority = priority
    }
    setDone(){
        if(this.done===true){
            this.done =false;
        }
        else{
            this.done = true
        }
    }

    getDone(){
        return this.done;
    }

}