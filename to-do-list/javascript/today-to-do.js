'use strict'

//displaying day
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var todayDate = new Date()

var todayMonth = monthsOfYear[todayDate.getMonth()]
var todayDayOfWeek = daysOfWeek[todayDate.getDay()]
var todayDayOfMonth = todayDate.getDate()

document.getElementById('today-date').innerText += `${todayDayOfWeek}, ${todayMonth} ${todayDayOfMonth}`

//adding new task
var taskDisplayContainer = document.querySelector('.task-display-container')
var addNewTaskButton = document.querySelector('.add-new-task-button')
var newTaskInput = document.querySelector('.add-new-task-input')

addNewTaskButton.addEventListener('click',()=>{
    if(newTaskInput.value === ''){
        return
    }else{
        var newTask = document.createElement('div')
        newTask.classList.add('daily-new-task')
        taskDisplayContainer.appendChild(newTask)
        newTask.innerHTML += `<input type="checkbox" class="daily-check-completed"> <p class="daily-new-task-text">${newTaskInput.value}</p><button class='daily-delete-task'><i class="material-icons-outlined">delete</i></button>`

        //clear input field
        newTaskInput.value = ''

        //add eventlistners to the new task checkbox
        var newTaskCheckBox = newTask.querySelector('.daily-check-completed')
        var newTasktext = newTask.querySelector('.daily-new-task-text')
        var deleteTaskButton = newTask.querySelector('.daily-delete-task')

        newTaskCheckBox.addEventListener('click',()=>{
            if(newTaskCheckBox.checked){
                newTasktext.classList.add('completed') 
            }else{
                newTasktext.classList.remove('completed')
            }
        })

        deleteTaskButton.addEventListener('click',()=>{
            newTask.remove()
        })
    }
})
