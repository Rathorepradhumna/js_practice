function greeting(msg) {
    return function who(name) {
        console.log(`${msg} , ${name}`);
    }
}
var hello = greeting("hello");
var howdy  = greeting("howdy");

hello("kyle");
hello("sarah");
howdy("grant");