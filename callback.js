//Example 1 - Callback
function First() {
    console.log("Hi Devendra");
}
function Second(callback) {
    var c=170;
    console.log(c);
    callback()
    console.log("How r u");
}
Second(First)

//Example 2 - Callback

const add=function (a,b,callbacks) {
    callbacks(a+b)  
}
add(2,3,(sum1)=>{
    add(4,sum1,(sum2)=>{
        add(5,sum2,(sum3)=>{
            console.log("sum is "+sum3);
        })
    })
}
)

//Example 3 - Callback

function myFirst() {
    console.log("Hello");
  }
  
  function mySecond(call) {
    call()
    console.log("Goodbye");
    call()
  }
  mySecond(myFirst)


