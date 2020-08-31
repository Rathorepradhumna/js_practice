const students = [
  {name : "pradhumna rathore" , branch : "cse"},
  {name : "namrata soni" , branch : "it"}
];

function enrollStudent(student , callback){
  setTimeout(() => {
    students.push(student);
    callback();
  }, 3000);
}


function getStudents(){
  setTimeout(()=>{
    students.forEach((student) =>{
      console.log(student.name);
    });
  },500);
}

let newStudent = {name : "poorva" , branch : "ece"};
enrollStudent(newStudent,getStudents);
