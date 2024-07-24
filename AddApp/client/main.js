var add=document.querySelector(".add")
var overlay=document.querySelector(".overlay")
var popup=document.getElementById("popup")

add.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

var Cancel=document.querySelector(".Cancel")

Cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

var Add=document.querySelector(".Add")
var details=document.querySelector(".details")
var inputnum =document.querySelector("#inputnum")
var inputtask =document.querySelector("#inputtask")
var inputtime =document.querySelector("#inputtime")
var inputnotes =document.querySelector("#inputnotes")
var parent=document.querySelector(".parent")

Add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
   
    div.setAttribute("class","details")

    div.innerHTML=`<h2>Task${inputnum.value}</h2>
    <h3>${inputtask.value}</h3>
    <h3>${inputtime.value}Hour</h3>
    <p>${inputnotes.value}</p>
    <button onclick="completed(event)">completed</button>`
    parent.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})

function completed(event){
   event.target.parentElement.remove()
}
