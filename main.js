function add(){
    let firstNumber = document.querySelector(".first").value 
    let secondNumber = document.querySelector(".second").value 

 
    let sum = parseInt(firstNumber) + parseInt(secondNumber)
    

    let status= document.querySelector(".statu")
    
   if(sum < 21){
       return status.innerHTML="Do you want to draw another card? ☹"
    } else if (sum === 21){
        return status.innerHTML="Yay!! You've got blackjack😎"
    } else{
       return status.innerHTML="You are out of the game!😭"
    }
}
