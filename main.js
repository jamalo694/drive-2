counter= document.getElementById("counter")
button= document.getElementById("btn")
resetButton = document.getElementById("rst")


console.log("count")

function count(){
    console.log("count")
    number = Number(counter.innerText)
    newNumber = number+1
 

    counter.innerText = newNumber 


}

button.addEventListener("click", function(e) {
    count();
   
})
 
function reset(){

     number = Number(counter.innerText)
    newNumber = number*0

     counter.innerText = newNumber 

    



}

resetButton.addEventListener("click", function(e){
    reset();
})