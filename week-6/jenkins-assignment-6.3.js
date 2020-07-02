/* ============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 1 July 2020
; Modified By: Douglas Jenkins
; Description: Object Literals
;=========================================== */

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 5.4"));
console.log ('\n');

// object with the customer information
const customer = {
  id: 101,
  name: 'Help Desk Support',
  requester: 'Bob Jones'
}

// outputs the object
console.log(customer.id + ' ' + customer.name + ' ' + customer.requester)
