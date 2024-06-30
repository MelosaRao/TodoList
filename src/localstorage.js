export function setlocalstorage(applist){
const projectsJsonString = JSON.stringify(applist);
localStorage.setItem('applist', projectsJsonString);
}

export function getlocalstorage(){
    const storedProjectsJsonString = localStorage.getItem('applist');
    const retrievedProjects = JSON.parse(storedProjectsJsonString);
    console.log(retrievedProjects)
    return retrievedProjects
}

export function setcurrentproject(current_project) {
    const current_project_string = JSON.stringify(current_project)
    localStorage.setItem('current_project', current_project_string);
}

export function getcurrentproject(){
    const current_project_string = localStorage.getItem('current_project');
    const current_project = JSON.parse(current_project_string);
    return current_project
}