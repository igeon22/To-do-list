import { today } from "./datemanage"


function CreateElement(parent,type,value="",textContent="",className=""){
	var newElement = document.createElement(type)
	parent.append(newElement)
	newElement.value = value
	newElement.className = className
	newElement.textContent = textContent

	return newElement
}

const localTasks = JSON.parse(localStorage.getItem('tasks'))




function ProjectCreator(){
	let body = document.querySelector(".main-part")
	// var a = CreateElement(body,"p",'',"welcome","test")

	
	let ProjectCreatorCont = CreateElement(body,"div",'',"","project-create-cont")
	let pCTitle = CreateElement(ProjectCreatorCont,"p",'',"Project Creator","pc-title")
	
	let pCForm = CreateElement(ProjectCreatorCont,"form",'',"","pc-form")

	let pCLabelName = CreateElement(ProjectCreatorCont,"label",'',"ProjectTitle","p-lb")
	pCLabelName.for = "p-name"
	
	let pCInputName = CreateElement(ProjectCreatorCont,"input",'',"","")
	pCInputName.type = "text"
	pCInputName.id = "p-name"
	pCInputName.maxLength = "22"
	pCInputName.required = true
	
	let pCLabelDate = CreateElement(ProjectCreatorCont,"label",'',"Expiry Date","p-lb")
	pCLabelDate.for = "p-name"
	let pCInputDate = CreateElement(ProjectCreatorCont,"input",'',"","")
	pCInputDate.type = "date"
	pCInputDate.id = "p-date"
	pCInputDate.maxLength = "20"
	pCInputDate.required = true

	let pCPriority = CreateElement(ProjectCreatorCont,"label",'',"Priority","p-lb")
	pCPriority.for = "p-name"
	let pcSelect = CreateElement(ProjectCreatorCont,"select",'',"Expiry ","")
	pcSelect.name = "Priority"
	pcSelect.id = "prio"
	let option1 = CreateElement(pcSelect,"option",'Low',"Low","")
	let option2 = CreateElement(pcSelect,"option",'Mid',"Mid","")
	let option3 = CreateElement(pcSelect,"option",'High',"High","")

	let submitBtn = CreateElement(ProjectCreatorCont,"input",'Create Project',"","v-project")
	submitBtn.type = 'submit'

	submitBtn.addEventListener(("click"),(e)=>{
		if (pCInputName != "" && pCInputDate.value!=""){
			e.preventDefault()
			CreateProject()
			ProjectCreatorCont.remove()
			CreateButton()
		}
	})
	
	
	
}


function CreateButton(){
	var body = document.querySelector(".main-part")
	let main = CreateElement(body,"div",'',"","main")
	let CreateProjectBtn = CreateElement(main,"button",'',"Add a New Task","create-project")

	CreateProjectBtn.addEventListener(("click"),()=>{
		ProjectCreator()
		var fieldPriority = document.querySelector("#prio")
		// console.log("Value: "+fieldPriority.value);
		main.remove()
	})

}



if(localTasks != null){
	var allTasks = localTasks
}
else{

	var allTasks = [{'title':'Default task','date':'27-03-2020','priority':'High'}]
}



function hh(){
	console.log('object');
}


function CreateProject(){
	var body = document.querySelector(".main-part")
	
	var fieldTitle = document.querySelector("#p-name")
	var fielDate = document.querySelector("#p-date")
	var fieldPriority = document.querySelector("#prio")

	var lst = {}
	lst['title'] = fieldTitle.value
	lst['date'] = fielDate.value
	lst['priority'] = fieldPriority.value

	allTasks.push(lst)
	localStorage.setItem('tasks',JSON.stringify(allTasks))

	// localStorage.clear()


	var body = document.querySelector(".main-part")

	let projectCont = CreateElement(body,"div",'',"","project-container-up")
	let delBtnCont = CreateElement(projectCont,"div",'',"","del-task-cont")
	let delBtn = CreateElement(delBtnCont,"button",'',"X","del-btn")
	let projectContDown = CreateElement(projectCont,"div",'',"","project-container-down")
	let projectTitle = CreateElement(projectContDown,"p",'',`${fieldTitle.value}`,"project-title")
	let projectExp = CreateElement(projectContDown,"p",'',`Deadline: `,"exp-date")
	let projectExpColor = CreateElement(projectExp,"span",'',`${fielDate.value}`,"days")

	let projectPriority = CreateElement(projectContDown,"p",'','Priority: ',"exp-date")
	let projectPriorityColor = CreateElement(projectPriority,"span",'',`${fieldPriority.value}`,"prio-color")

	delBtn.id = `${fieldTitle.value}-${fielDate.value}-${fieldPriority.value}`
	let az = delBtn.id.split("-")
	let aTitle = az[0]
	let aDate = `${az[1]}-${az[2]}-${az[3]}`
	let aPriority = `${az[4]}`
	
	delBtn.addEventListener(('click'),()=>{
		deleteTasks(allTasks,aTitle,aDate,aPriority)
		localStorage.setItem('tasks',JSON.stringify(allTasks))
		delBtn.parentElement.parentElement.remove()

	})


	if (fieldPriority.value == "Low"){

		projectPriorityColor.style.color = "#2563eb"
	}
	if (fieldPriority.value == "Mid"){

		projectPriorityColor.style.color = "#fbbf24"
	}
	if (fieldPriority.value == "High"){
		
		projectPriorityColor.style.color = "#ef4444"
	}

	// console.log(allTasks);

	



}

function loadProjects(title,date,priority){
	var body = document.querySelector(".main-part")

	let projectCont = CreateElement(body,"div",'',"","project-container-up")
	let delBtnCont = CreateElement(projectCont,"div",'',"","del-task-cont")
	let delBtn = CreateElement(delBtnCont,"button",'',"X","del-btn")
	let projectContDown = CreateElement(projectCont,"div",'',"","project-container-down")
	let projectTitle = CreateElement(projectContDown,"p",'',`${title}`,"project-title")
	let projectExp = CreateElement(projectContDown,"p",'',`Deadline: `,"exp-date")
	let projectExpColor = CreateElement(projectExp,"span",'',`${date}`,"days")
	let projectPriority = CreateElement(projectContDown,"p",'','Priority: ',"exp-date")
	let projectPriorityColor = CreateElement(projectPriority,"span",'',`${priority}`,"prio-color")

	delBtn.id = `${title}-${date}-${priority}`
	let az = delBtn.id.split("-")
	let aTitle = az[0]
	let aDate = `${az[1]}-${az[2]}-${az[3]}`
	let aPriority = `${az[4]}`
	// console.log(az);
	
	delBtn.addEventListener(('click'),()=>{
		deleteTasks(localTasks,aTitle,aDate,aPriority)
		localStorage.setItem('tasks',JSON.stringify(allTasks))
		delBtn.parentElement.parentElement.remove()

	})
	
	
	if (priority == "Low"){
		
		projectPriorityColor.style.color = "#2563eb"
	}
	if (priority == "Mid"){
		
		projectPriorityColor.style.color = "#fbbf24"
	}
	if (priority == "High"){

		projectPriorityColor.style.color = "#ef4444"
	}

	// console.log(allTasks);
	
	
}

// Object.values(allTasks).forEach(value => console.log(value.key));

export{CreateButton,ProjectCreator}

// loadProjects(allTasks[0]['title'],allTasks[0]['date'],allTasks[0]['priority'])


function Load(lst){

	// console.log(lst);
	for(var i=0;i<lst.length;i++){
		// lst[i] = JSON.parse(lst[i])
		if(lst[i]['title']!= null && lst[i]['date']!= null && lst[i]['priority']!= null ){

			loadProjects(lst[i]['title'],lst[i]['date'],lst[i]['priority'])
		}
		
		

	}
}

function deleteTasks(lst,title,date,priority){
	var count = 0

	if(count <=1){
		for(var i=0;i<lst.length;i++){
			// lst[i] = JSON.parse(lst[i])
			if(lst[i]['title']== title && lst[i]['date']== date && lst[i]['priority']== priority ){
				lst[i]['title'] = null
				lst[i]['date'] = null
				lst[i]['priority'] = null
				count +=1
	
				// console.log('Task was removed' + count);
				
			}
	
	
	
		}

	}
	else{
		count = 0
	}
}

// console.log("Local"+localTasks);
window.onload = Load(localTasks)
// var v = today()
// console.log(v);
