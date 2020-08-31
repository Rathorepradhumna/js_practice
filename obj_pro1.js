var stu1 = {};
stu1.firstName = "Pradhumna";
stu1.lastName = "Rathore";
stu1.gender = "male";
stu1.branch = "cse";

var stu2 = {};
stu2.firstName = "poorva";
stu2.lastName = "paliwal";
stu2.gender = "female";
stu2.branch = "it";
function createStudentObject(firstName ,lastName , gender , branch) {
    //var newObject = {};
this.firstName = firstName ;
this.lastName = lastName;
this.gender = gender;
this.branch = branch;
//return newObject;
}
var stu3 = new createStudentObject("Namrata" , "soni" , "female","ece");
console.log(stu3);