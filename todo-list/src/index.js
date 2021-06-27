import DOMloader from "./DOMloader";
import TasksLoader from "./task";

DOMloader.loadHeader();
DOMloader.loadMainContainer();
DOMloader.loadProjects(TasksLoader.projects);


