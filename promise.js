//Example 1 - Promise
/*let myPromise = new Promise(function (myResolve,myReject)
 {
    let age =19
    if (age>18) {
        myResolve("Eligible");    
    }
    else{
        myReject("Unligible");
    }
})
let display= msg => console.log(msg);
myPromise.then(
    function(value){display(value)},
    function(error){display(error)}
)*/

//Example 2 - Promise
/*const add = (a,b,error) => {return new Promise((resolve,reject) => {
    if (!error) {
        resolve(a+b)
    } else {
        reject("Invalid")
    }
}
    ) }
const sub = (a,b,error) => {return new Promise((resolve,reject) => {
        if (!error) {
            resolve(a-b)
        } else {
            reject("Invalid")
        }
    }
        ) }
add(1,2,false)
.then(result=>sub(result,1,false))
.then(result1=>console.log(result1))
.catch(err=>console.log(err))
*/

//Example 3 - Promise
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  let display= msg => console.log(msg);
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {display(error);}
  );

