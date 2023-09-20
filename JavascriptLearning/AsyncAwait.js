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

//consuming code with async and await
async function asyncgfunc()
{
    try{
        let getorder=await takeorder('coffee')
        console.log(getorder)
        let testmethod=test()
        console.log(testmethod)
        let Order1=await processOrder()
        console.log(Order1)
        let Order2=await processOrder1('no')
        console.log(Order2)
    }
   catch(err){
    console.log(err)
   }
   
}
asyncgfunc()