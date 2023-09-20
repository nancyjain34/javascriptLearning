const axios = require('axios');

//Get request to fetch the user with id
async function getspecificuser()
{
    let res= await axios.get('https://reqres.in/api/users/2');
    console.log(res.data);
    console.log(res.status);
}
getspecificuser();

//post request to create a new user
async function createuser()
{
    let payload={"name" : "nancy", "job" : "QE"}
    let res= await axios.post('https://reqres.in/api/users',payload)
    console.log(res.data);
    console.log(res.status);
}
createuser();