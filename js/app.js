"use strict"
let userName = prompt("What's your name?");
alert("Hello " + userName +" answer the next questions by using yes or no (y/n)")
let firstQ = prompt("Does Ishaq like shawerma?")
if(firstQ.toLowerCase() === "yes" || firstQ.toLowerCase() === "y")
{
alert('You are correct')
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
}else{
    alert('Enter just yes or no')
};
let thQ = prompt("Okay " + userName + " do I watch football?")
if(thQ.toLowerCase() === "yes" || thQ.toLowerCase() === "y")
{
alert('You are correct')
}else if(thQ.toLowerCase() === "no" || thQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
let forthQ = prompt("Has Ishaq ever traveled outside his country?")
if(forthQ.toLowerCase() === "yes" || forthQ.toLowerCase() === "y")
{
alert('You are correct')
}else if(forthQ.toLowerCase() === "no" || forthQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
let fifthQ = prompt("Do Ishaq love jordan?")
if(fifthQ.toLowerCase() === "yes" || fifthQ.toLowerCase() === "y")
{
alert('You are correct')
}else if(fifthQ.toLowerCase() === "no" || fifthQ.toLowerCase() === "n"){
alert('You are incorrect')
}else{
    alert('Enter just yes or no')
};
// console.log(firstQ)
// console.log(secQ)
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