//scoping

//global
var fun = function(){
    console.log(this)
}

var fun = function(){
    console.log(this)
}

myObj = {name:"fun"}
myObj.method = fun;
setTimeout(myObj.method, 3000)

//fix
setTimeout(function(){
    my.Object.method()
}, 3000)

setTimeout(myObject.method.bind(myObj),10);

//object/implicit

var fun = function(){
    console.log(this);
}

myObj.method = fun;
myObj.method();

//explicit
var fun = function(){
    console.log(this);
}

fun.call(myObj);

//new
myObj = {name: 'web'}
myObj.method = fun;

new myObj.method();

//nested function
function add(){
    var count = 0;
    var inc=()=>{
        count+=1
    }
    inc();
}

//closure
var add = (function(){
    var count = 0; 
    return function(){
        return count +=1;
    }
})();// <-self-calling function

var add =(function(){
    var count = 0;
    return function(){
        return count +=1;
    }
})();

//function factory

function makeAdder(x){
    return function(y){
        return x+y;
    }
}

var add5=makeAdder(5);

console.log(add5(2));

//async
//callback
callback(data);

//promises
mom = new Promise((resolve, reject)=>{mycode})
//promise train
simulateMe().then((result)=>{});

//Async await
async function mom(){
    await mycall();
}