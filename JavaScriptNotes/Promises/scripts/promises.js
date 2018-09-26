//promise object

//has states that are initially pending but change to either fulfilled or rejected
let promise = new Promise(function(resolve, reject) { //resolve and reject are predefined   
    //the executor 
    //when created this is ran automatically
    //it should eventually produce a result but result is intiially undefined
});

//once executed another method is called
//either resolve (value) were state is now fulfilled
//or reject(error) where state is now rejected 

//--------------------ACTUAL EXAMPLES------------------------

//resolved promise
let resolvedPromise = new Promise (function (resolve, reject){
    setTimeout(() => resolve("done!"), 1000);
})

//rejected promise
let rejectedPromise = new Promise (function (resolve, reject){
    setTimeout (() => reject(new Error("Whoops!")),1000);
})
