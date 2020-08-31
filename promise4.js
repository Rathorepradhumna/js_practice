const { promises, ftruncateSync } = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

function func1(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            //resolve("hello pradhumna");
            reject("sorry pradhumna");
        },2000);
    })
}

function func2(){
    console.log("after function1");
}

func1().then((data)=>{func2() ; console.log(data)}).catch((data)=>{console.log(data)});