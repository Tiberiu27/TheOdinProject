import TasksLoader from "./task";

const projects = TasksLoader.projects;

const DOMloader = (() => {
    let modalProject = document.getElementById('addProjectModal');
    let addProjectModal = document.getElementById('addProject');
    let closeProjectModal = document.getElementById('closeProject');

    let modalTask = document.getElementById('addTaskModal');
    let addTaskModal = document.getElementById('addTask');
    let closeTaskModal = document.getElementById('closeTask');

    addProjectModal.onclick = () => {
        let name = document.getElementById('projectName').value;
        TasksLoader.addProject(name);
        loadProjects(projects);
        modalProject.style.display = 'none';
    };

    closeProjectModal.onclick = () => {
        document.getElementById('projectName').value = '';
        modalProject.style.display = 'none';
    }

    addTaskModal.onclick = () => {
        let projectParent = document.getElementById('projectParent').value;
        let title = document.getElementById('taskTitle').value;
        let description = document.getElementById('taskDescription').value;
        let dueDate = document.getElementById('taskDueDate').value;

        let projectIndex = projects.indexOf(projectParent);
        if (!projects.hasOwnProperty(projectParent)) {
            TasksLoader.addProject(projectParent);
            loadProjects(projects);
        }

        let project = projects[projectIndex];

        TasksLoader.addTask(projectParent, title, description, dueDate, 'medium');
        loadTasks(project);
        modalTask.style.display = 'none';
    };

    closeTaskModal.onclick = () => {
        modalTask.style.display = 'none';
    };

    const loadHeader = () => {
        const header = document.createElement('header');
        header.textContent = 'TODO List';
        document.body.append(header);
    };
    
    const loadMainContainer = () => {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'mainContainer');
        document.body.appendChild(mainContainer);

        loadProjectList();
        loadTasksList();
        loadTaskDetail();
    };

    const loadTaskDetail = () => {
        if (document.contains(document.getElementById('taskDetailContent'))) {
            return;
         }
        const mainContainer = document.getElementById('mainContainer');
        const taskDetail = document.createElement('div');
        const content = document.createElement('div');
        content.setAttribute('id', 'taskDetailContent');
        taskDetail.setAttribute('id', 'taskDetail');
        taskDetail.appendChild(content);
        mainContainer.appendChild(taskDetail);
    }

    const loadTasksList = () => {
        if (document.contains(document.getElementById('tasksListContent'))) {
            return;
         }
        const mainContainer = document.getElementById('mainContainer');
        const tasksList = document.createElement('div');
        const content = document.createElement('div');
        content.setAttribute('id', 'tasksListContent');
        tasksList.setAttribute('id', 'tasksList');
        tasksList.textContent = 'Tasks';
        tasksList.appendChild(content);
        mainContainer.appendChild(tasksList);
    }

    const loadProjectList = () => {
        if (document.contains(document.getElementById('projectListContent'))) {
           return;
        }

        const mainContainer = document.getElementById('mainContainer');
        const projectList = document.createElement('div');
        const content = document.createElement('div');
        projectList.setAttribute('id', 'projectList');
        content.setAttribute('id', 'projectListContent');
        projectList.textContent = 'Projects';
        projectList.appendChild(content);
        mainContainer.appendChild(projectList);
    }

    const loadProjects = (projects) => {
        const content = document.getElementById('projectListContent');
        const addButton = document.createElement('span');
        addButton.setAttribute('id', 'addProjectButton');
        addButton.textContent = 'Add Project';
        addButton.addEventListener('click', () => {
            modalProject.style.display = 'block';
        });

        content.innerHTML = '';
;
        projects.forEach(project => {
            const item = document.createElement('div');
            item.setAttribute('class','projects');
            item.textContent = project.name;
            item.addEventListener('click', (e) => {
                const projectName = e.target.textContent;
                const projectIndex = projects.findIndex(item => item.name === projectName);
                const project = projects[projectIndex];
                loadTasks(project);
                if (document.getElementById('taskDetailContent')) {
                    document.getElementById('taskDetailContent').innerHTML = '';
                }
            });
            content.appendChild(item);
        });
        content.appendChild(addButton)
        loadProjectList();
    };

    const loadTasks = (project) => {
        const content = document.getElementById('tasksListContent');
        const addButton = document.createElement('span');
        const deleteProject = document.createElement('span');

        addButton.textContent = 'Add Task';
        addButton.addEventListener('click', () => {
            modalTask.style.display = 'block';
        });

        deleteProject.textContent = 'Delete Project';
        deleteProject.setAttribute('id', 'deleteProjectButton');
        deleteProject.addEventListener('click', () => {
            TasksLoader.removeProject(project);
            loadProjects(projects);
            content.innerHTML = '';
            if (document.getElementById('taskDetailContent')) {
                document.getElementById('taskDetailContent').innerHTML = '';
            }

        });
        content.innerHTML = '';
        content.appendChild(addButton);
        content.appendChild(deleteProject);

        project.tasks.forEach(task => {
            const item = document.createElement('div');
            const title = document.createElement('p');
            const dueDate = document.createElement('p');

            title.textContent = task.title;
            dueDate.textContent = `due ${task.dueDate}`;

            item.setAttribute('class', 'tasks');
            item.append(title, dueDate);
            item.addEventListener('click', () => {
                loadDetail(project, task);
            });
            content.appendChild(item);
        });

        loadTasksList();
    };

    const loadDetail = (project, task) => {
        const content = document.getElementById('taskDetailContent');
        const title = document.createElement('h3');
        const description = document.createElement('div');
        const dueDate = document.createElement('p');
        const priority = document.createElement('h3');
        const firstLine = document.createElement('div');
        const lastLine = document.createElement('div');
        const remove = document.createElement('h4');

        remove.addEventListener('click', () => {
            TasksLoader.removeTask(project, task);
            loadTasks(project);
            loadDetail(); //TODO: should polish this to remove console errors
        });

        priority.addEventListener('click', () => {
            TasksLoader.changePriority(project, task);
            loadDetail(project, task);
        });

        firstLine.setAttribute('id', 'firstLine');
        lastLine.setAttribute('id', 'lastLine');
        title.classList.add('titles');
        description.classList.add('descriptions');
        description.setAttribute('contenteditable', 'true');
        dueDate.classList.add('dueDates');
        priority.classList.add('priorities');

        content.innerHTML = '';
        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = `Due: ${task.dueDate}`;
        priority.textContent = `Priority: ${task.priority}`;
        remove.textContent = 'Delete task';
        lastLine.append(dueDate, remove);
        firstLine.append(title, priority);
        content.append(firstLine, description, lastLine);

        loadTaskDetail();
    }

    return { loadHeader, loadMainContainer, loadProjects };
})();


export default DOMloader;