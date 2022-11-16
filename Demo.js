console.log("Hello world");
let a=2;
//let a=3;
let b=3;
const f=84
console.log(f);
//f=6 undefined
console.log(f);
let c=a+b;
console.log(c);
function add(a,b) {
    return a+b;
}
setTimeout(myFunction, 3000);

function myFunction() {
    console.log("hiiiiiiiiiii");
}
console.log(add(5,3));
let x = "John" + "Doe";
console.log(x);
var d=45
{
    var d=86
    console.log(d);
}
console.log(d);
//synchronous
{
    console.log("hiii");
    console.log("hello");
    console.log("how are u");
}
//Asynchronous
{
    console.log("hiii");
    setTimeout(printfuntion, 3000);
    function printfuntion() {
        console.log("hiiiiiiiiiii5555");    
    }
    console.log("how are uuuuuu");   
}