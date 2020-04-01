
const array = []

document.addEventListener("DOMContentLoaded", () => {
  // your code here

const myForm = document.querySelector("#create-task-form")




myForm.addEventListener("submit", function(e){
  e.preventDefault()

  const dropDown = document.querySelector("#selColor").value



const grabText = e.target.querySelector("#new-task-description").value

const myLi = document.createElement("li")
myLi.innerText = grabText




if (dropDown === "High") {
  myLi.style.color = "#d1410b"

} else if (dropDown === "Medium") {
  myLi.style.color = "#feee75"
  
} else if (dropDown === "Low") {
  myLi.style.color = "#008000"
  

} else {}
Object.assign({}, {priorityValue: document.querySelector("#selColor").id})


const deleteButton = document.createElement("button")

// deleteButton.id = grabText

deleteButton.innerText = "X"

const parentTag = document.querySelector("#tasks")
myLi.appendChild(deleteButton)
parentTag.appendChild(myLi)

deleteButton.addEventListener("click", function(e){

    e.target.parentElement.remove()

})



// Create a drop down menu of importance 

//When li is created determine whether value was high medium or low

//Create if statement to assign color to li 

// 








myForm.reset()
 


})
});


