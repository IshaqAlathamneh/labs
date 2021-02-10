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


// for (let i = 1; i < 5; i++) {
    
//     let askOne = prompt('Can you tell me how many years are my age?')
//     askOne = parseInt(askOne)
//     console.log(typeof askOne)
//     if(askOne < 22){
    
//        alert('You are too low')
       
//     }else if(askOne > 22){

//         alert('You are too high')
        
//     }else if(askOne === 22){

//         alert('That is correct')
//         score = score + 1 ;

//         break 

//     }else{
//         alert('enter a numaric value')
//     }
//  if(i === 4){
//      alert('My age is 22')
//  }
// }
// console.log(score)
// for (let j = 1; j < 5; j++) {
    
//     let askTwo = prompt('Can you tell me how many cars I have?')
//     askTwo = parseInt(askTwo)
    
//     if(askTwo < 0){
    
//        alert('You are too low')
       
//     }else if(askTwo > 0){

//         alert('You are too high')
        
//     }else if(askTwo === 0){

//         alert('That is correct')
//         score = score + 1 ;

//         break 

//     }else{
//         alert('enter a numaric value')
//     }
//     if(j === 4){
//         alert('I dont have any cars')
//     }
// }
// console.log(score)
// for (let n = 1; n < 5; n++) {
    
//     let askThree = prompt('Can you tell me how many phones I have?')
//     askThree = parseInt(askThree)
    
//     if(askThree < 2){
    
//        alert('You are too low')
       
//     }else if(askThree > 2){

//         alert('You are too high')
        
//     }else if(askThree === 2){

//         alert('That is correct')
//         score = score + 1 ;

//         break 

//     }else{
//         alert('enter a numaric value')
//     }
//     if(n === 4){
//         alert('I have 2 phones')
//     }
// }
// console.log(score)

// for (let y = 1; y < 5; y++) {
    
//     let askFive = prompt('Before how many months I graduated?')
//     askFive = parseInt(askFive)
    
//     if(askFive < 5){
    
//        alert('You are too low')
       
//     }else if(askFive > 5){

//         alert('You are too high')
        
//     }else if(askFive === 5){

//         alert('That is correct')
//         score = score + 1 ;

//         break 

//     }else{
//         alert('enter a numaric value')
//     }
//     if(y === 4){
//         alert('It was from 5 months ago')
//     }
// }
// console.log(score)
// for (let x = 1; x < 5; x++) {
    
//     let askSix = prompt('Before how many years I came to jordan?')
//     askSix = parseInt(askSix)
    
//     if(askSix < 8){
    
//        alert('You are too low')
       
//     }else if(askSix > 8){

//         alert('You are too high')
        
//     }else if(askSix === 8){

//         alert('That is correct')
//         score = score + 1 ;

//         break 

//     }else{
//         alert('enter a numaric value')
//     }
//     if(x === 4){
//         alert('It was from 8 years ago')
//     }
// }
// console.log(score)
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
// for (let ib = 1; ib < 7; ib++) {
//     let qO = prompt('what is my fav club')
//     switch (qO){
//         case "barcelona":
//         case "liverpool":
//         case "milan":    
//             alert('Correct!!')
//             ib = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are barcelona & liverpool & milan')
// for (let ic = 1; ic < 7; ic++) {
//     let qO = prompt('what is my fav fruits')
//     switch (qO){
//         case "apple":
//         case "banana":
//         case "orange":    
//             alert('Correct!!')
//             ic = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are apple & banana & orange')
// for (let id = 1; id < 7; id++) {
//     let qO = prompt('what is my fav games')
//     switch (qO){
//         case "fifa":
//         case "pubg":
//         case "cod":    
//             alert('Correct!!')
//             id = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are fifa & pubg & cod')
// for (let ie = 1; ie < 7; ie++) {
//     let qO = prompt('what are cars brands I love')
//     switch (qO){
//         case "BMW":
//         case "GMC":
//         case "toyota":    
//             alert('Correct!!')
//             ie = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are BMW & GMC & toyota')
// for (let ig = 1; ig < 7; ig++) {
//     let qO = prompt('what is my fav countries')
//     switch (qO){
//         case "jordan":
//         case "germany":
//         case "palastine":    
//             alert('Correct!!')
//             ig = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are jordan & palastine & germany')
// for (let ih = 1; ih < 7; ih++) {
//     let qO = prompt('what is my fav anime')
//     switch (qO){
//         case "one piece":
//         case "attack on titans":
//         case "dragon ball":    
//             alert('Correct!!')
//             ih = 7
//             score++ 
//             break;
//         default:
//             alert('that is incorrect') 
               
//     }
// }
// alert('The answers are one piece & attack on titans & dragon ball')
alert(`Your mark is ${score} out of 7`)

if(firstQ.toLowerCase() === "yes" || firstQ.toLowerCase() === "y")
{
    document.write("<h2>Yes, Ishaq loves shawerma</h2>")
}else{
    document.write("<h2>What!!! ofcourse I love shawerma</h2>")
}
if(secQ.toLowerCase() === "yes" || secQ.toLowerCase() === "y")
{
    document.write("<h2>Don't hate me but I don't like the cofee</h2>")

}else{
    document.write("<h2>Also you're right cofee is bad</h2>")
}
if(thQ.toLowerCase() === "yes" || thQ.toLowerCase() === "y")
{
    document.write("<h2>And ofcourse and I love barcelona</h2>")
}else{
    document.write("<h2>And ronaldo hate you</h2>")
}
if(forthQ.toLowerCase() === "yes" || forthQ.toLowerCase() === "y")
{
    document.write("<h2>And he is the reason of corona</h2>")
}else{
    document.write("<h2>Hey, don't be liar</h2>")
}
if(fifthQ.toLowerCase() === "yes" || fifthQ.toLowerCase() === "y")
{
    document.write("<h2>And sure he loves jordan and all arabic countries</h2>")
}else{
    document.write("<h2>And that's all okay, but why you lie?</h2>")
}