//set- it is an ordered and unique list. Here we cannot access items with index like in case of arrays.

const s=new Set([2,5,6,1]);
s.add(4);

s.forEach((e)=>{
    console.log(e);
})

s.delete(4);

for(e1 of s)
{
    console.log(e1);
}

s.clear(); //empty the set
console.log(s);

s.add(1);
s.add(3);
console.log(s);

console.log(s.size);

//conversion
//array to set which we saw above i.e const s=new Set([1,4,3])
//set to array

console.log(Array.from(s));