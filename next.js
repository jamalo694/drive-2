clearCart = document.getElementById("remove")
minus = document.getElementById("minus")
add = document.getElementById("plus")



function reduce(){
    number= Number  (counter.innerText)
   
    newNumber = Math.max(0,number-1)
       

    counter.innerText=newNumber


}

minus.addEventListener("click", function(e){
    reduce();
})



function increase(){
    number= Number  (counter.innerText)
    newNumber = number +1
       

    counter.innerText=newNumber


}


add.addEventListener("click", function(e){
    increase();
})



function clear(){
    counter.innerText=0
}


clearCart.addEventListener("click", function(e){
    clear();

})