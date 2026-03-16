// Dashboard 

const tasks = document.querySelectorAll(".tasks li")

for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", function(){
        this.classList.toggle("completed")
    })
}

// Sidebar section

const menuBtn = document.getElementById("menuBtn")
const sidebar = document.getElementById("sidebar")
const closeicon = document.getElementById("closenav")

menuBtn.addEventListener("click", function(){

sidebar.classList.toggle("active")

})

menuBtn.addEventListener("click", function(){
    sidebar.style.left=0
})

closeicon.addEventListener("click",function(){
    sidebar.style.left="-50%"
})


// Projects

function addProject(){
    debugger;

    
    if(validation()){
        let name = document.getElementById("projectName").value
    let status = document.getElementById("projectStatus").value
    let deadline = document.getElementById("projectDeadline").value

    let table = document.getElementById("projectTable")
    let row = document.createElement("tr")
    let color = "status black"

    if (status == "On Track") {
        color = "status green";
    } else if (status == "Delayed"){
        color = "status red";
    } else {
        color = "status black"
    }

    row.innerHTML = `
    <td>${name}</td>
    <td class="${color}">${status}</td>
    <td>
    <div class="progress">
    <div class="bar" style="width:60%"></div>
    </div>
    </td>
    <td>${deadline}</td>

    <td>
    <button onclick="deleteProject(this)" class="delete-btn">Delete</button>
    </td>
`
    table.appendChild(row)

    updateDashboard()
    }
}

function validation(){
        let projectName = document.getElementById("projectName").value;
        let date = document.getElementById("projectDeadline").value;
        if(projectName == ""){
            alert("Enter the project name");
            return false;
        }


        if (date == "") {
            alert("Please select deadline date")
            return false;
        }
        return true;
    }

// Delete button
function deleteProject(btn){
    btn.parentElement.parentElement.remove()
    updateDashboard()
}

//  Update dashboard

function updateDashboard(){
    debugger;
    let projects = document.querySelectorAll("#projectTable tr")
    let totalProjects = projects.length
    let ongoingProjects = 0
    let dueProjects = 0

    for (let i = 0; i < projects.length; i++) {
    let row = projects[i]
    let status = row.children[1].innerText.trim()

    if (status === "On Track") {
        ongoingProjects++
    }

    if(status == "Delayed"){
        dueProjects++
    }
}

    let tasksToday = document.querySelectorAll("#taskList li").length

    document.getElementById("totalProjects").innerText = totalProjects
    document.getElementById("ongoingProjects").innerText = ongoingProjects
    document.getElementById("tasksToday").innerText = dueProjects

}

window.onload = function(){
    updateDashboard()
}

    