/*var it = [1,2];
for(let val of it)
{
    console.log(`Iterator value : ${val}`)
}
var gre = "hello";
var ch = [...gre];
console.log(ch);*/

var buttonName = new Map();
buttonName.set(btn1,"button 1");
buttonName.set(btn2,"button 2");

for(let [btn,btnName] of buttonName){
    btn.addEventListener("click",function onClick(){
        console.log(`clicked : ${btnName}`);   
    });
}