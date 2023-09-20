    //let myPromise = new Promise(function(resolve, reject) {
    // // "Producing Code" (May take some time)
    // let x=0;
    // if(x==0)
    // {
    //     resolve("OK"); // when successful
    // }
    //  else
    //   reject("Error");  // when error
    // });
    
    // // "Consuming Code" (Must wait for a fulfilled Promise)
    // myPromise.then(
    //   function(result) { console.log(result) },
    //   function(failedResult) { console.log(failedResult) }
    // );

//More practice
//producing promise
let promise=new Promise(function(resolve,reject){
  const a=1;
  const b=2;
  setTimeout(()=>{
  if(a==b)
  {
  resolve('equal')
  } reject('not equal')
  },2000)
})
//consuming promise
promise.then(
function(xyz){console.log(xyz)},  //fulfilled
);

promise.catch( 
function(errroor){console.log(errroor)} //rejected
)

//once promise is fulfilled or rejected it is settled