function clg(name , age , branch) {
    this.name = name;
    this.age = age;
    this.branch = branch;
    this.addage = function () {
        this.age +=2;
    }
}
var clg1 = new clg("pradhumna" , 22 , "cse");
var clg2 = new clg("namrata" , 23 , "it");
function lname(str) {
    this.str = str;
}
var m1 = new lname("rathore");
m1.addage = clg1.addage;
clg1.addage()
m1.addage();
m1.addage.call(clg1);
console.log(m1);
console.log(clg1);
m1.addage.call(clg2);
console.log(m1);
console.log(clg2);