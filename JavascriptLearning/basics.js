console.log("HEllo");
let a=5;
console.log(a+' And it is a '+typeof a);

let b=5.123;
console.log(b+' And it is a '+typeof b);

let c="hello";
console.log(c+' And it is a '+typeof c);

let bool =true;
console.log(bool+ ' And it is a ' +typeof bool);

//String -can be quoted in "" or '' or `` - reason being below
let name1="nancy";
let city1="bhopal";
console.log("Print plssssssssss");
console.log("Student name is "+ name1 +" and lives in "+ city1);
//or
console.log(`Student name is ${name1} and lives in ${city1}`);

//if
let test=true;
if(!test)
{
    console.log("if executed");
}
else
{
    console.log("else executed");
}

//while
let x=true;
while(x)
{
    console.log("Inside while")
    x=false;
}
//do while
//for
for(let i=0;i<10;i++)
{
    if(i%2==0)
    console.log('even num are ' + i);
}

//for of --used to iterate over values like array, string, map, set, array like object
let col=['blue','green']
for(let val of col)
{
    console.log(val);
}
let str="hello"
for(let c of str)
console.log(c)
//for in --iterate over keys and allows you to loop through properties of an object. Also with arrays
let colors={
    color1: 'RED',
    color2: 'Blue',
    color3:'PINK'
}
for(let color in colors) //here color is a key
{
    console.log(color + '=>' + colors[color]);
}
//to iterate in arrays
let colorarray=['blue','green','yellow']
for(key in colorarray)
{
console.log(colorarray[key])
}
//functions
let sumfunction=function(a,b)
{
return a+b;
}
console.log(sumfunction(2,4));

//another way
function sumfunc(a,b)
{
return a+b;
}

let sumval=sumfunc(3,4);
console.log(sumval);

//another way
let sumofnum=((a,b)=>a+b);
console.log(sumofnum(3,7));

//string operations
let teststr="Good Morning"
console.log(teststr[0]);
let splitstr=teststr.split(" ");
console.log(splitstr[1]);

//to convert string to a number in order to perform Arithemetic operations
let str1='27'
let str2='30'
let diff=parseInt(str2)-parseInt(str1);
console.log(diff);
diff.toString();//convert back to String again

//find how many times day occurred in below string
let saying="Sunday is Funday"
console.log(saying.indexOf("day"));//3 index of first day match
console.log(saying.indexOf("day",4));//starting from 4 so this will match at second day index i.e. 13
let indexofday=saying.indexOf("day")
let count=0;
while(indexofday!=-1)
{
    count++;
    indexofday=saying.indexOf("day",indexofday+1);
} 
console.log("count of day " + count);

//str.charAt
function xyz(xy,n)
{
return xy.charAt(n);
}
console.log(xyz("hellodfs",5));

//substring or slice
function xyz1(st)
{
return st.substring(3);
}
console.log(xyz1("hellodfs"));

let arr=[1,3,4,7,5,9]
let l=arr.length;
console.log(arr.slice(l-3))
