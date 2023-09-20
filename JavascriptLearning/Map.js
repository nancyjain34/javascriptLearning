//map is key valued just like object plus it is ordered just like array or set so it is both. 
//It can have duplicate vaues

const map=new Map([[1,'Nancy'],[2,'UD'],[3,'Durva']])
map.forEach((k,v)=>{
    console.log(k+' '+v);
})

for(const [key,value] of map)
{
    console.log(key +' ' + value);
}

console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log(map.has(1)); //true
console.log(map.get(1)); //Nancy

map.delete(3);
console.log(map)
//map.clear()

//to update and add elements in map- use set
map.set(2,'Udit') //update
map.set(3,'Durva') //add

map.forEach((k1,v1)=>
{
    console.log(k1 + ' ' +v1);
})