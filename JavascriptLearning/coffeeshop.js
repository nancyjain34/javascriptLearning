//coffee order
function takeorder(orderitem)
{
    return new Promise(function(resolve,reject){
        if (orderitem=='coffee')
        resolve('order is accepted')
        else
        reject('order rejected')
    })
}

function processOrder()
{
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve('Order is served')
       
    })
}
function processOrder1(nextorderitem)
{
    return new Promise(function(resolve,reject){
        if(nextorderitem=='yes')
        {
            console.log('Next order is being processed again')
            resolve('Order is served again')
        }
        else
        reject('No more orders')      
    })
}
//without promise code order can also be consumed
function test()
{
    return 'hello'
}
//consuming code method1
takeorder('coffee').then(function(abc){
    console.log(abc)
    let greet=test()
    console.log(greet)
    processOrder().then(function(abc){
        console.log(abc)
        processOrder1('no').then(function(orderyes){console.log(orderyes)},function(orderno){console.log(orderno)})})
})
.catch(function(error)
{
    console.log(error)
})

//above consuming promise code has created  a lot of chaining to we use async/await. Refer that code file.