/* ============================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 9 July 2020
; Modified By: Douglas Jenkins
; Description: loop of inventors
;=========================================== */

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 7.2"));
console.log ('\n');


// creates function for the out
function Inventor(firstName,lastName, job){
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = job;
}


// creates 5 objects of the inventors name and job
var inventors = [
  new Inventor('Thomas', 'Edison', 'Software Engineer'),
  new Inventor('Benjamin', 'Franklin', 'Programmer'),
  new Inventor('Nikola', 'Tesla', 'Project Manager'),
  new Inventor('Charles', 'Babbage', 'Product Manager'),
  new Inventor('Alexander', 'Bell', 'Business Analyst')
];

// Output
let index = 1;
for (let x = 0; x < inventors.length; x++){
  console.log (index + ' ' + inventors[x].firstName + ' ' + inventors[x].lastName + ' ' + inventors[x].job)
  index++
}
