
/*function  foo() {
    console.log("hello");
    console.log(this);
}
foo();*/

var obj = {
    "prop"  : "this is obj object",
};
obj.foo = function () {
    console.log("hello");
    console.log(this);
}
obj.foo();
