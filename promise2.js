const { resolve } = require("path");


function func1(){
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            const error  =true;
            if(!error){
                console.log("your promise has been resolved");
                resolve();
            }
            else{
                console.log("your promise has been rejected");
                reject("sorry not fullfiled");            }
        },3000);

    })
}

func1().then(()=>{console.log("pradhumnna : promise done")}).catch((error)=>{console.log("very bad pradhumna "  + error)});