function foo() {
    
}
console.log(foo())
var newFooObj = new foo();
var newFooObj2 = new foo();
//console.log(newFooObj);
foo.prototype.test = "this a prototype object";
foo.prototype.age = 21;
newFooObj.__proto__.hello = "this value is for prototype";
console.log(newFooObj);
newFooObj.name = "this is for original";
console.log(newFooObj.__proto__);

console.log(foo.prototype);
console.log(newFooObj.test);