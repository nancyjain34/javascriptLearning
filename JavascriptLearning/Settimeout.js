//settimeout and setinterval are the asynchronous methods
//setTimeout(greet,3000) OR
settimeout=setTimeout(greet,3000)
function greet()
{
    console.log('Hello')
}

//setInterval and to stop execution using clearInterval
let timer=setInterval(cb,1000)
function cb()
{
console.log('Hi')
}

setTimeout(()=>{clearInterval(timer)}, 6000)