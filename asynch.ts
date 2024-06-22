console.log();
console.log("\t \t ASYNCHRONOUS ASSIGNMENT");

//TASK 01: Write a simple asynchronous Typescript function fetchGreeting that returns a greting message after a 2seconds
//delay using setTimeOut.

function fetchGreeting(greet:string){ 
    setTimeout(() => {
    console.log(greet)
    }, 2000);
}
fetchGreeting("Hello World");

//TASK 02:Write a function simulateTask that simulates a task by logging "Task started",waits for 1 second,and then 
//logs "task completed".Use setTimeOut for the delay.

function simulateTask(){
    setTimeout(()=>{
        console.log("Task completed");
    },1000)
}
console.log("Task started");
simulateTask()


//TASK 03:Write a function fetchdata that returns a Promise which resolves with the string "Data fetched successfully!"
//after a delay of 1 second.

function fetchData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data fetched successfully!")
            },1000)
        })
}
fetchData().then((res)=>{
console.log(res);

})


//TASK 04:Write a function fetchWithError that returns a Promise.It should randomly either resolves with "Data fetched successfully!"
//or reject with "Data fetch failed!"after a delay of 1 second.Handle the rejection using .catch.

function fetchWithError(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let randomDecision = Math.random() > 0.5;
        if(randomDecision){ 
              resolve("Data fetched succecssfully!");
            }
          else{reject("Data fetch failed!")}
        },1000)
    })
}
fetchWithError()
.then((success)=>{
console.log(success);
})
.catch((rejection)=>{
    console.log(rejection);
})

console.log();

//TASK 05:Write a function executeSequentially that executes two functions fetchData and processData sequentially 
//using Promises,and logs the results in the order they are called.
 
function executeSequentially(){
    return new Promise(()=>{
        function fetchData(){
            return("Data is fetched");
            
        };
        function processData(){
            return("Data sequentially processed");
            
        };
       console.log(fetchData());
       console.log(processData());
       
    })
}
executeSequentially();



