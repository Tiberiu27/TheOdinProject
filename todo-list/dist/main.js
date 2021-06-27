(()=>{"use strict";class e{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}}class t{constructor(e,t){this.name=e,this.tasks=t}}const n=(()=>{let n=window.localStorage,d=[];return d=function(e){let t;try{t=window.localStorage;let e="___storage test___";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()&&n.getItem("projects")?JSON.parse(n.getItem("projects")):[],{projects:d,addProject:e=>{const o=new t(e,[]);d.push(o),n.setItem("projects",JSON.stringify(d))},addTask:(t,o,i,s,c)=>{const a=new e(o,i,s,c),r=d.findIndex((e=>e.name===t));d[r].tasks.push(a),n.setItem("projects",JSON.stringify(d))},removeTask:(e,t)=>{const o=d.indexOf(e),i=d[o].tasks.indexOf(t);i&&(d[o].tasks.splice(i,1),n.setItem("projects",JSON.stringify(d)))},removeProject:e=>{const t=d.indexOf(e);d.splice(t,1),n.setItem("projects",JSON.stringify(d))},changePriority:(e,t)=>{const o=d.indexOf(e),i=d[o].tasks.indexOf(t);switch(t.priority){case"low":return void(d[o].tasks[i].priority="medium");case"medium":return void(d[o].tasks[i].priority="high");case"high":return void(d[o].tasks[i].priority="low")}n.setItem("projects",JSON.stringify(d))}}})(),d=n.projects,o=(()=>{let e=document.getElementById("addProjectModal"),t=document.getElementById("addProject"),o=document.getElementById("closeProject"),i=document.getElementById("addTaskModal"),s=document.getElementById("addTask"),c=document.getElementById("closeTask");t.onclick=()=>{let t=document.getElementById("projectName").value;n.addProject(t),m(d),e.style.display="none"},o.onclick=()=>{document.getElementById("projectName").value="",e.style.display="none"},s.onclick=()=>{let e=document.getElementById("projectParent").value,t=document.getElementById("taskTitle").value,o=document.getElementById("taskDescription").value,s=document.getElementById("taskDueDate").value,c=d.indexOf(e);d.hasOwnProperty(e)||(n.addProject(e),m(d));let a=d[c];n.addTask(e,t,o,s,"medium"),u(a),i.style.display="none"},c.onclick=()=>{i.style.display="none"};const a=()=>{if(document.contains(document.getElementById("taskDetailContent")))return;const e=document.getElementById("mainContainer"),t=document.createElement("div"),n=document.createElement("div");n.setAttribute("id","taskDetailContent"),t.setAttribute("id","taskDetail"),t.appendChild(n),e.appendChild(t)},r=()=>{if(document.contains(document.getElementById("tasksListContent")))return;const e=document.getElementById("mainContainer"),t=document.createElement("div"),n=document.createElement("div");n.setAttribute("id","tasksListContent"),t.setAttribute("id","tasksList"),t.textContent="Tasks",t.appendChild(n),e.appendChild(t)},l=()=>{if(document.contains(document.getElementById("projectListContent")))return;const e=document.getElementById("mainContainer"),t=document.createElement("div"),n=document.createElement("div");t.setAttribute("id","projectList"),n.setAttribute("id","projectListContent"),t.textContent="Projects",t.appendChild(n),e.appendChild(t)},m=t=>{const n=document.getElementById("projectListContent"),d=document.createElement("span");d.setAttribute("id","addProjectButton"),d.textContent="Add Project",d.addEventListener("click",(()=>{e.style.display="block"})),n.innerHTML="",t.forEach((e=>{const d=document.createElement("div");d.setAttribute("class","projects"),d.textContent=e.name,d.addEventListener("click",(e=>{const n=e.target.textContent,d=t.findIndex((e=>e.name===n)),o=t[d];u(o),document.getElementById("taskDetailContent")&&(document.getElementById("taskDetailContent").innerHTML="")})),n.appendChild(d)})),n.appendChild(d),l()},u=e=>{const t=document.getElementById("tasksListContent"),o=document.createElement("span"),s=document.createElement("span");o.textContent="Add Task",o.addEventListener("click",(()=>{i.style.display="block"})),s.textContent="Delete Project",s.setAttribute("id","deleteProjectButton"),s.addEventListener("click",(()=>{n.removeProject(e),m(d),t.innerHTML="",document.getElementById("taskDetailContent")&&(document.getElementById("taskDetailContent").innerHTML="")})),t.innerHTML="",t.appendChild(o),t.appendChild(s),e.tasks.forEach((n=>{const d=document.createElement("div"),o=document.createElement("p"),i=document.createElement("p");o.textContent=n.title,i.textContent=`due ${n.dueDate}`,d.setAttribute("class","tasks"),d.append(o,i),d.addEventListener("click",(()=>{p(e,n)})),t.appendChild(d)})),r()},p=(e,t)=>{const d=document.getElementById("taskDetailContent"),o=document.createElement("h3"),i=document.createElement("div"),s=document.createElement("p"),c=document.createElement("h3"),r=document.createElement("div"),l=document.createElement("div"),m=document.createElement("h4");m.addEventListener("click",(()=>{n.removeTask(e,t),u(e),p()})),c.addEventListener("click",(()=>{n.changePriority(e,t),p(e,t)})),r.setAttribute("id","firstLine"),l.setAttribute("id","lastLine"),o.classList.add("titles"),i.classList.add("descriptions"),i.setAttribute("contenteditable","true"),s.classList.add("dueDates"),c.classList.add("priorities"),d.innerHTML="",o.textContent=t.title,i.textContent=t.description,s.textContent=`Due: ${t.dueDate}`,c.textContent=`Priority: ${t.priority}`,m.textContent="Delete task",l.append(s,m),r.append(o,c),d.append(r,i,l),a()};return{loadHeader:()=>{const e=document.createElement("header");e.textContent="TODO List",document.body.append(e)},loadMainContainer:()=>{const e=document.createElement("div");e.setAttribute("id","mainContainer"),document.body.appendChild(e),l(),r(),a()},loadProjects:m}})();o.loadHeader(),o.loadMainContainer(),o.loadProjects(n.projects)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NbG9hZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInRoaXMiLCJQcm9qZWN0IiwibmFtZSIsInRhc2tzIiwic3RvcmFnZSIsIndpbmRvdyIsInByb2plY3RzIiwidHlwZSIsIngiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImUiLCJET01FeGNlcHRpb24iLCJjb2RlIiwibGVuZ3RoIiwic3RvcmFnZUF2YWlsYWJsZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInB1c2giLCJzdHJpbmdpZnkiLCJhZGRUYXNrIiwicHJvamVjdE5hbWUiLCJ0YXNrIiwicHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwicmVtb3ZlVGFzayIsImluZGV4T2YiLCJ0YXNrSW5kZXgiLCJzcGxpY2UiLCJyZW1vdmVQcm9qZWN0IiwiY2hhbmdlUHJpb3JpdHkiLCJtb2RhbFByb2plY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUHJvamVjdE1vZGFsIiwiY2xvc2VQcm9qZWN0TW9kYWwiLCJtb2RhbFRhc2siLCJhZGRUYXNrTW9kYWwiLCJjbG9zZVRhc2tNb2RhbCIsIm9uY2xpY2siLCJ2YWx1ZSIsImxvYWRQcm9qZWN0cyIsInN0eWxlIiwiZGlzcGxheSIsInByb2plY3RQYXJlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImxvYWRUYXNrcyIsImxvYWRUYXNrRGV0YWlsIiwiY29udGFpbnMiLCJtYWluQ29udGFpbmVyIiwidGFza0RldGFpbCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJsb2FkVGFza3NMaXN0IiwidGFza3NMaXN0IiwidGV4dENvbnRlbnQiLCJsb2FkUHJvamVjdExpc3QiLCJwcm9qZWN0TGlzdCIsImFkZEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInRhcmdldCIsImRlbGV0ZVByb2plY3QiLCJhcHBlbmQiLCJsb2FkRGV0YWlsIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJyZW1vdmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2FkSGVhZGVyIiwiaGVhZGVyIiwiYm9keSIsImxvYWRNYWluQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFDRixZQUFZQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUNyQ0MsS0FBS0osTUFBUUEsRUFDYkksS0FBS0gsWUFBY0EsRUFDbkJHLEtBQUtGLFFBQVVBLEVBQ2ZFLEtBQUtELFNBQVdBLEdBSXhCLE1BQU1FLEVBQ0YsWUFBWUMsRUFBTUMsR0FDZEgsS0FBS0UsS0FBT0EsRUFDWkYsS0FBS0csTUFBUUEsR0FJckIsTUEySkEsRUEzSm9CLE1BNkZwQixJQUFJQyxFQUFVQyxPQUFxQixhQUMvQkMsRUFBVyxHQTBEWCxPQWpEQUEsRUFwQ0osU0FBMEJDLEdBQ3RCLElBQUlILEVBQ0osSUFDSUEsRUFBVUMsT0FBVyxhQUNyQixJQUFJRyxFQUFJLHFCQUdSLE9BRkFKLEVBQVFLLFFBQVFELEVBQUdBLEdBQ25CSixFQUFRTSxXQUFXRixJQUNaLEVBR1gsTUFBT0csR0FDSCxPQUFPQSxhQUFhQyxlQUVMLEtBQVhELEVBQUVFLE1BRVMsT0FBWEYsRUFBRUUsTUFHUyx1QkFBWEYsRUFBRVQsTUFFUywrQkFBWFMsRUFBRVQsT0FFREUsR0FBOEIsSUFBbkJBLEVBQVFVLFFBTzVCQyxJQUNLWCxFQUFRWSxRQUFRLFlBR05DLEtBQUtDLE1BQU1kLEVBQVFZLFFBQVEsYUFHL0IsR0FpREosQ0FBRVYsV0FBVWEsV0E5Q0NqQixJQUNoQixNQUFNa0IsRUFBVSxJQUFJbkIsRUFBUUMsRUFBTSxJQUNsQ0ksRUFBU2Us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QUFNNUIsRUFBZ0JqQixTQUFTbUIsY0FBYyxPQUM3Q0YsRUFBY0ksYUFBYSxLQUFNLGlCQUNqQ3JCLFNBQVM0QyxLQUFLdEIsWUFBWUwsR0FFMUJTLElBQ0FILElBQ0FSLEtBaUtvQ04saUJBMU4xQixHQ0RsQixlQUNBLHNCQUNBLGVBQXVCLGEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG59XG5cbmNvbnN0IFRhc2tzTG9hZGVyID0gKCgpID0+IHtcbiAgICAvLyBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICAvLyAgICAge25hbWU6ICdXb3JrJywgdGFza3M6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ3ByaW50aW5nJyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxMi4wNS4yMDIwJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ3NjYW5uaW5nJyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxNS4wNS4yMDIxJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnZmlsbGluZyBwYXBlcnMnLFxuICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU29tZSBkZXNjcmlwdGlvbicsXG4gICAgLy8gICAgICAgICAgICAgZHVlRGF0ZTogJzEyLjA1LjIwMjAnLFxuICAgIC8vICAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgXX0sXG4gICAgXG4gICAgLy8gICAgIHtuYW1lOiAnSG9tZScsIHRhc2tzOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdsYXVuZHJ5JyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxMi4wMi4yMDIwJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnd2Fsa2luZyB0aGUgZG9nJyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxMi4wNi4yMDIwJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ2RvaW5nIGRpc2hlcycsXG4gICAgLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTb21lIGRlc2NyaXB0aW9uJyxcbiAgICAvLyAgICAgICAgICAgICBkdWVEYXRlOiAnMTIuMDUuMjIyMCcsXG4gICAgLy8gICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICBdfSxcbiAgICBcbiAgICAvLyAgICAge25hbWU6ICdIb2JieScsIHRhc2tzOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdmaXNoaW5nJyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxMi4wNS4yMDIwJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ2RhbmNlJyxcbiAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvbWUgZGVzY3JpcHRpb24nLFxuICAgIC8vICAgICAgICAgICAgIGR1ZURhdGU6ICcxMi4wNS4yMDIwJyxcbiAgICAvLyAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ2xpZnQgd2VpZ2h0cycsXG4gICAgLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTb21lIGRlc2NyaXB0aW9uJyxcbiAgICAvLyAgICAgICAgICAgICBkdWVEYXRlOiAnMTIuMDUuMjAyMCcsXG4gICAgLy8gICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgXX0sXG4gICAgLy8gXTtcblxuICAgIC8vbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgbGV0IHggPSAnX19fc3RvcmFnZSB0ZXN0X19fJ1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5sZXQgc3RvcmFnZSA9IHdpbmRvd1snbG9jYWxTdG9yYWdlJ107XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgaWYgKCFzdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgICAgICAgcHJvamVjdHMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICB9XG59IGVsc2Uge1xuICAgIHByb2plY3RzID0gW107XG59XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIFtdKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICBpZiAoIXRhc2tJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIHJlbW92ZVByb2plY3QsIGNoYW5nZVByaW9yaXR5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrc0xvYWRlcjtcbiIsImltcG9ydCBUYXNrc0xvYWRlciBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IHByb2plY3RzID0gVGFza3NMb2FkZXIucHJvamVjdHM7XG5cbmNvbnN0IERPTWxvYWRlciA9ICgoKSA9PiB7XG4gICAgbGV0IG1vZGFsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0TW9kYWwnKTtcbiAgICBsZXQgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICBsZXQgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VQcm9qZWN0Jyk7XG5cbiAgICBsZXQgbW9kYWxUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tNb2RhbCcpO1xuICAgIGxldCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpO1xuICAgIGxldCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVRhc2snKTtcblxuICAgIGFkZFByb2plY3RNb2RhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpLnZhbHVlO1xuICAgICAgICBUYXNrc0xvYWRlci5hZGRQcm9qZWN0KG5hbWUpO1xuICAgICAgICBsb2FkUHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICBtb2RhbFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgY2xvc2VQcm9qZWN0TW9kYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJykudmFsdWUgPSAnJztcbiAgICAgICAgbW9kYWxQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgYWRkVGFza01vZGFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0UGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RQYXJlbnQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEdWVEYXRlJykudmFsdWU7XG5cbiAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdFBhcmVudCk7XG4gICAgICAgIGlmICghcHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdFBhcmVudCkpIHtcbiAgICAgICAgICAgIFRhc2tzTG9hZGVyLmFkZFByb2plY3QocHJvamVjdFBhcmVudCk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuXG4gICAgICAgIFRhc2tzTG9hZGVyLmFkZFRhc2socHJvamVjdFBhcmVudCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAnbWVkaXVtJyk7XG4gICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgbW9kYWxUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RPRE8gTGlzdCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBsb2FkTWFpbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRhaW5lcicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgIGxvYWRQcm9qZWN0TGlzdCgpO1xuICAgICAgICBsb2FkVGFza3NMaXN0KCk7XG4gICAgICAgIGxvYWRUYXNrRGV0YWlsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRUYXNrRGV0YWlsID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxDb250ZW50JykpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tEZXRhaWxDb250ZW50Jyk7XG4gICAgICAgIHRhc2tEZXRhaWwuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrRGV0YWlsJyk7XG4gICAgICAgIHRhc2tEZXRhaWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RldGFpbCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRhc2tzTGlzdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RDb250ZW50JykpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NMaXN0Q29udGVudCcpO1xuICAgICAgICB0YXNrc0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc0xpc3QnKTtcbiAgICAgICAgdGFza3NMaXN0LnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbiAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzTGlzdCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Q29udGVudCcpKSkge1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaXN0Jyk7XG4gICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdENvbnRlbnQnKTtcbiAgICAgICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3RDb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG47XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0cycpO1xuICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgICAgICAgICAgICAgbG9hZFRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbENvbnRlbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbENvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgICAgbG9hZFByb2plY3RMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0Q29udGVudCcpO1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWxUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFRhc2tzTG9hZGVyLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbENvbnRlbnQnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlsQ29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYGR1ZSAke3Rhc2suZHVlRGF0ZX1gO1xuXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza3MnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKHRpdGxlLCBkdWVEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZERldGFpbChwcm9qZWN0LCB0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZFRhc2tzTGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkRGV0YWlsID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlsQ29udGVudCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGxhc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG5cbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgVGFza3NMb2FkZXIucmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrKTtcbiAgICAgICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGxvYWREZXRhaWwoKTsgLy9UT0RPOiBzaG91bGQgcG9saXNoIHRoaXMgdG8gcmVtb3ZlIGNvbnNvbGUgZXJyb3JzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgVGFza3NMb2FkZXIuY2hhbmdlUHJpb3JpdHkocHJvamVjdCwgdGFzayk7XG4gICAgICAgICAgICBsb2FkRGV0YWlsKHByb2plY3QsIHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBmaXJzdExpbmUuc2V0QXR0cmlidXRlKCdpZCcsICdmaXJzdExpbmUnKTtcbiAgICAgICAgbGFzdExpbmUuc2V0QXR0cmlidXRlKCdpZCcsICdsYXN0TGluZScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZXMnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25zJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlcycpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0aWVzJyk7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWxldGUgdGFzayc7XG4gICAgICAgIGxhc3RMaW5lLmFwcGVuZChkdWVEYXRlLCByZW1vdmUpO1xuICAgICAgICBmaXJzdExpbmUuYXBwZW5kKHRpdGxlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGZpcnN0TGluZSwgZGVzY3JpcHRpb24sIGxhc3RMaW5lKTtcblxuICAgICAgICBsb2FkVGFza0RldGFpbCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWRIZWFkZXIsIGxvYWRNYWluQ29udGFpbmVyLCBsb2FkUHJvamVjdHMgfTtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgRE9NbG9hZGVyOyIsImltcG9ydCBET01sb2FkZXIgZnJvbSBcIi4vRE9NbG9hZGVyXCI7XG5pbXBvcnQgVGFza3NMb2FkZXIgZnJvbSBcIi4vdGFza1wiO1xuXG5ET01sb2FkZXIubG9hZEhlYWRlcigpO1xuRE9NbG9hZGVyLmxvYWRNYWluQ29udGFpbmVyKCk7XG5ET01sb2FkZXIubG9hZFByb2plY3RzKFRhc2tzTG9hZGVyLnByb2plY3RzKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9