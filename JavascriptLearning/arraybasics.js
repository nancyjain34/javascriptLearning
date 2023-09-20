//Arrays

let marks=[1,2,4,6,7,8]
//or
//let marks=new Array(1,5,78,4,5)
//or let marks=Array(6)
marks[2]=3;
console.log(marks);
console.log('length of array is ' +marks.length);
marks.push(9,10); //insert on last
marks.pop(); //delete last element
marks.shift();//deletes first element
marks.unshift(5); //insert element at first

console.log(marks);
//to get the index 
let indexval=marks.indexOf(9)
console.log('index of element 9 is: ' + indexval);

//use marks.charAt(1)- to get the value at index 1

//to check whethet element is there in array or not
console.log(marks.includes(12)) //it should return false

//to get the subarray
let submarks=marks.slice(1,4);
console.log(submarks);

//print sum of elements of array
let sum=0;
for(let i=0;i<marks.length;i++)
{
sum=sum+marks[i];
}
console.log(sum);

//empty array
let emptyarr=[];
for(let i=0;i<marks.length;i++)
{
    if(marks[i]%2==0)
    emptyarr.push(marks[i]);
}
console.log(emptyarr);

//array sorting
//for string it can sort using simple sort but for numbers either use for loop or below shortcut
let fruit=["mango","apple","banana"];
console.log(fruit.sort());
//reverse
console.log(fruit.reverse());
//but if it is a numbers in array
let num=[3,5,1];
console.log(num.sort((a,b)=>a-b));//this acts as bubble sort which means min difference will come first
//reverse
console.log(num.sort((a,b)=>b-a));

//spread operations
const hobbies=["dancing","Sports"]
const copyarr=[...hobbies];
console.log(copyarr);

//rest opertaions
const marks1=(...args)=>
{
return args;
}
console.log(marks1(1,3,2,5));

//iterate in arrays
//for each
let numarr=[1,4,3,2]

let sum1=0;
numarr.forEach(element => {
  
    sum1=sum1+element;
    
})
console.log(`sum is ${sum1}`);

//for 
let sum2=0;
for(let e1 of numarr)
{
     sum2=e1+sum2;
}
console.log(sum2);

//map

console.log(numarr.map((n)=>n+1)); //increments each elemnt by 1 
//but numarr is not changed
console.log(numarr);

