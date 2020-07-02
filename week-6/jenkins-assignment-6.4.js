/* ============================================
; Title: Assignment 6.1
; Author: Professor Krasso
; Date: 1 July 2020
; Modified By: Douglas Jenkins
; Description: Nested Object Literals
;=========================================== */

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 6.4"));
console.log ('\n');

// Nested object
const ticket = {
  id: 105,
  name: 'John Doe',
  dateCreated: new Date(2020, 06, 01),
  priority: 'Urgent',
    person :{
      id: 101,
      firstName: 'Bob',
      lastName: 'Jones',
      jobTitle: '(Programmer I)'

    }
};

//Output
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee '
+ ticket['person']['firstName'] + " " + ticket['person']['lastName'] + " " + ticket['person']['jobTitle']);
