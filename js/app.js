"use strict"
let score = 0;
let userName = prompt("What's your name?");
alert("Hello " + userName +" answer the next questions by using yes or no (y/n)")
let firstQ = prompt("Does Ishaq like shawerma?")
if(firstQ.toLowerCase() === "yes" || firstQ.toLowerCase() === "y")
{
alert('You are correct')
score++
}else if (firstQ.toLowerCase() === "no" || firstQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
let secQ = prompt("Does Ishaq like cofee?")
if(secQ.toLowerCase() === "yes" || secQ.toLowerCase() === "y")
{
alert('You are incorrect')
}else if(secQ.toLowerCase() === "no" || secQ.toLowerCase() === "n"){
alert('You are correct')
score++
}else{
    alert('Enter just yes or no')
};
let thQ = prompt("Okay " + userName + " do I watch football?")
if(thQ.toLowerCase() === "yes" || thQ.toLowerCase() === "y")
{
alert('You are correct')
score++
}else if(thQ.toLowerCase() === "no" || thQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
let forthQ = prompt("Has Ishaq ever traveled outside his country?")
if(forthQ.toLowerCase() === "yes" || forthQ.toLowerCase() === "y")
{
alert('You are correct')
score++
}else if(forthQ.toLowerCase() === "no" || forthQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
let fifthQ = prompt("Do Ishaq love jordan?")
if(fifthQ.toLowerCase() === "yes" || fifthQ.toLowerCase() === "y")
{
alert('You are correct')
score++
}else if(fifthQ.toLowerCase() === "no" || fifthQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};



for (let a = 1; a < 5; a++) {
    
    let askFour = prompt('Do you know the percentage of your loving in my heart?')
    askFour = parseInt(askFour)
    
    if(askFour < 99){
    
       alert('You are too low')
       
    }else if(askFour > 99){

        alert('You are too high')
        
    }else if(askFour === 99){

        alert('That is correct')
        score = score + 1 ;

        break 

    }else{
        alert('enter a numaric value')
    }
    if(a === 4){
        alert('You take 99% of my heart')
    }
}
console.log(score)



let qO = prompt('what is my fav food')
for (let ia = 1; ia < 7; ia++) {
    if(ia > 1){
    qO = prompt('Try again what is my fav food')
}
   let favFood = ['mansaf','pizza','shawerma','mandi','burger']
   for (let j=0 ; j < favFood.length ; j++){
       if (qO.toLowerCase() === favFood[j]){
       alert('you are correct!!')
       score++
       ia = 7;
       break;

   }
} 
}
alert('The answers are mansaf & shawerma & pizza & mandi & burger')

alert(`Your mark is ${score} out of 7`)
