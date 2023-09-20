const {Given,When,Then} =require('@cucumber/cucumber');
const n= require('./common.js')
const assert=require('assert')

  Given('value of x is {int}', function (int) {
    n.x=int;
    console.log(n.x);
        });

  Given('value of y is {int}', function (int) {
   n.y=int;
   });
 
  When('we sum the two numbers', function () {
     n.sum=n.x+n.y;
    console.log();
      });

  Then('the result must be {int}', function (int) {
    assert.equal(n.sum,int)
          });
        