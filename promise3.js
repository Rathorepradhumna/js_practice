const { resolve } = require("path");
const { rejects } = require("assert");

const students = [
    {name : "pradhumna rathore" , branch : "cse"},
    {name : "namrata soni" , branch : "it"}
  ];

  function enrollStudent(student){

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            students.push(student)
            const error = false;
            if(!error){
                resolve();
            }
            else
            {
                reject();
            }
        },3000);
    })
  }

  function getStudent(){
      setTimeout(()=>{
        students.forEach((student)=>{
            console.log(student.name);
        })
      },2000);
  }

  let newStudent = {name : "poorva paliwal" , branch : "ece"};

  enrollStudent(newStudent).then(()=>{
      getStudent();
  }).catch(()=>{console.log("promise failed")});