"use strict";
const str = {

    rev : (x) => x.split('').reverse().join(''),

    palindrome : (x) => {
        if(x.split('').reverse().join('') == x)
        return true;
        else
        return false; 
    },

    len : (x) => x.length, 

    


}
let demo = ["pradhumna" , "rathore" , "lol"];

demo.forEach(function(p){
    console.log(str.rev(p));
console.log(str.palindrome(p));
console.log(str.len(p));
});