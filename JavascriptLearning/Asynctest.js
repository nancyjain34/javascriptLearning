const fs=require('fs');

//Synchronous code --Here execution is sequential but if file size is large then code below has to wait.
//console.log('First Line')
// let data =fs.readFileSync('f1.txt')
// console.log('file data is ---' +data)
// console.log('Last Line')

//Asynchronous code when order of callbacks func execution will be random and all sync code will run first
console.log('First Line')
fs.readFile('f1.txt',(err,data)=>{
    if(err)
    console.log(err)
    else
    console.log('file data is ---' +data)
    })
fs.readFile('f2.txt',(err,data)=>{
        if(err)
        console.log(err)
        else
        console.log('file data is ---' +data)
    })
fs.readFile('f3.txt',(err,data)=>{
        if(err)
        console.log(err)
        else
        console.log('file data is ---' +data)
    })
console.log('Last Line')

//Asynchronous code if we want to maintain the order of callbacks then write below
// console.log('First Line')
// fs.readFile('f1.txt',(err,data)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log('file data is ---' +data)
//     fs.readFile('f2.txt',(err,data)=>{
//         if(err)
//         console.log(err)
//         else
//         console.log('file data is ---' +data)
//         fs.readFile('f3.txt',(err,data)=>{
//             if(err)
//             console.log(err)
//             else
//             console.log('file data is ---' +data)
//         })
//     })
// })
// console.log('Last Line')

