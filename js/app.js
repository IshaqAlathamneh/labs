"use strict"
let userName = prompt("What's your name?");
alert("Hello " + userName +" answer the next questions by using yes or no (y/n)")
let firstQ = prompt(userName + " ,do you like shawerma?")
let secQ = prompt(userName + " , do you like cofee?")
let thQ = prompt("Okay " + userName + " do you watch football?")
let forthQ = prompt("Have you ever traveled outside your country?")
let fifthQ = prompt("do you love jordan?")

if(firstQ.toLowerCase() === "yes" || firstQ.toLowerCase() === "y")
{
    document.write("<h2>Shawerma loves you</h2>")
}else{
    document.write("<h2>Shawerma better than you</h2>")
}
if(secQ.toLowerCase() === "yes" || secQ.toLowerCase() === "y")
{
    document.write("<h2>and the cofee love you</h2>")

}else{
    document.write("<h2>and the cofee hate you</h2>")
}
if(thQ.toLowerCase() === "yes" || thQ.toLowerCase() === "y")
{
    document.write("<h2>and messi loves you</h2>")
}else{
    document.write("<h2>and ronaldo hate you</h2>")
}
if(forthQ.toLowerCase() === "yes" || forthQ.toLowerCase() === "y")
{
    document.write("<h2>and you are the reason of corona</h2>")
}else{
    document.write("<h2>and you love the country</h2>")
}
if(fifthQ.toLowerCase() === "yes" || fifthQ.toLowerCase() === "y")
{
    document.write("<h2>and Jordan love your cutie face</h2>")
}else{
    document.write("<h2>that's all okay, but why you hate jordan? hahaha</h2>")
}