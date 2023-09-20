const { default: getColorFns } = require("@cucumber/cucumber/lib/formatter/get_color_fns");

//functions
function func(a,b)
{
return 'sum is ' + (a+b);
}
console.log(func(3,2));

//one more way

func1=function(a,b)
{
    return a*b
}
console.log('Multiply is ' + func1(3,2));

//Arrow functions
let arrowfunc=(a,b)=>
{
 return {

    'Sum using arrow func is' : +(a+b) +" "+
    'Multiply using arrow func is ' +(a*b)
 };
};

console.log(arrowfunc(8,5));

//Arrow functions -if it is a single line code then we can also remove return and curly paranthesis
let sum=(a,b)=>a+b;
console.log(sum(3,4));

//Arrow func without arguments
let func3= y=>y+1;
console.log(func3(5));

let func4 =()=>4+1;
console.log(func4());

//objects 
//JS object is a collection of properties

let person={
    firstname:"nancy",
    lastname:"jain"
}
console.log(person.lastname);
person.gender="female";//add new property
console.log(person);
console.log(person['firstname']);
//or person.firstname;

delete person.gender; //delete property gender
console.log(person);

person.lastname='taran'//update 
console.log(person);

//to check if any property exist or not in object
console.log('gender' in person) //false as we have deleted

//print all the values of javascript object
for(let key in person)
{
    console.log(person[key])
}

//to copy object to another object
const copiedperson={...person};
console.log('Copies person is: ')
console.log(copiedperson);
    
//Methods

let student={
    name : "Max",
    age : "21",
    greet()
    {
        console.log("HEllo I am "+student.name);
    }
}
student.greet();
console.log(student);

//to access elements of object
let car={
model: 'kia',
color:'red',
type:'diesel'
}
console.log(car['model']); //this will get the value of key
console.log(car.model);
console.log();
   
//to add new element in object
car.number=0761
car.address={
    flatno:6,
    houseno:6,
    steet:'Arera Hills',
    pincode: '61829'
}
car.owner=['nany','dad']
console.log(car)

//to delete any property
delete car.color;
console.log(car)