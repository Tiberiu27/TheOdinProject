class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}

const TasksLoader = (() => {

    //local storage
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '___storage test___'
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }

    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

let storage = window['localStorage'];
let projects = [];

if (storageAvailable('localStorage')) {
    if (!storage.getItem('projects')) {
        projects = [];
    } else {
        projects = JSON.parse(storage.getItem('projects'));
    }
} else {
    projects = [];
}

    const addProject = (name) => {
        const project = new Project(name, []);
        projects.push(project);
        storage.setItem('projects', JSON.stringify(projects));
    };

    const addTask = (projectName, title, description, dueDate, priority) => {
        const task = new Task(title, description, dueDate, priority);
        const projectIndex = projects.findIndex(project => project.name === projectName);
        projects[projectIndex].tasks.push(task);
        storage.setItem('projects', JSON.stringify(projects));
    }

    const removeTask = (project, task) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex].tasks.indexOf(task);
        if (!taskIndex) {
            return;
        }
        projects[projectIndex].tasks.splice(taskIndex, 1);
        storage.setItem('projects', JSON.stringify(projects));
    };

    const removeProject = (project) => {
        const projectIndex = projects.indexOf(project);
        projects.splice(projectIndex, 1);
        storage.setItem('projects', JSON.stringify(projects));
    };

    const changePriority = (project, task) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex].tasks.indexOf(task);
        switch (task.priority) {
            case 'low':
                projects[projectIndex].tasks[taskIndex].priority = 'medium';
                return;
            case 'medium':
                projects[projectIndex].tasks[taskIndex].priority = 'high';
                return;
            case 'high':
                projects[projectIndex].tasks[taskIndex].priority = 'low';
                return;
        }
        storage.setItem('projects', JSON.stringify(projects));
    };

    return { projects, addProject, addTask, removeTask, removeProject, changePriority };
})();

export default TasksLoader;
