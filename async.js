const fetch = require("node-fetch");

async function pradumna() {
    console.log("inside pradhuma");
    const response = await fetch('https://api.github.com/users',()=>{console.log("inside fetch")});
    console.log("before response");
    
    const users = await response.json();
    console.log("user resloved");
    return users;
}

console.log("before calling pradhumna");
let a = pradumna();
console.log("after pradhumna");
console.log(a);
a.then((data) => {console.log("proimse done")});
console.log("last line of this file");