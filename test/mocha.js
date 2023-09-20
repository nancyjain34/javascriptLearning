const supertest=require('supertest')
const assert = require('chai').assert;
const expect = require('chai').expect;

const request=supertest('https://gorest.co.in/public/v2');
const token='b37f8a61331c637ac726fb59f2bd9f1fe3999e630af874cb0f6b25a50e29d5f8'
//via handling async calls using done
describe('user',()=>{
it('GET /users',(done)=>
{
    request.get(`/users?user-token=${token}`).end( (err,res)=>
    {
        console.log(err);
        console.log(res.body);
        expect(res.body.data).to.not.be.empty;
        expect(res.status).to.equal(200);
        done();
    })
})
})

//via promise

// describe('user',()=>{
// it('GET /users',()=>
// {
//     return request.get(`/users?access-token=${token}`).then((res)=>
//     {
//         //console.log(err);
//       //  console.log(res.body.data);
//         expect(res.body.data).to.not.be.empty;
//       //  expect(res.status).to.equal(200);
//     })
// })
// })
