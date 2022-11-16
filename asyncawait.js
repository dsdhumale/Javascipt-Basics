//Example 1
/*const add = (a,b,error) => {return new Promise((resolve,reject) => {
    if (!error) {
        resolve(a+b);
    } else {
        reject("Invalid")
    }
}
    ) }
const sub = (a,b,error) => {return new Promise((resolve,reject) => {
        if (!error) {
            resolve(a-b);
        } else {
            reject("Invalid")
        }
    }
        ); }
async function result(){
    try{
        let result1 = await add(3,5,false);
        console.log("Add function-",result1);
        let result2 = await sub(result1,2,false);
        console.log("Result is - " +result2);
    }
    catch(err){
        console.log(err);
    }
}
result();

*/
//Example 2

const temp = (a,b) => {return new Promise((resolve,reject) => {
    if (a>b) {
        console.log("a is elder");
    } else {
        reject("b is elder")
    }
}
    ) }
    async function result(){
            try{let result1 = await temp(5,8);
            console.log("Age comparison",result1);
    }
    catch(err){
    console.log(err);
    }
}
    result()