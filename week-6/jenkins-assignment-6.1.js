/* ============================================
; Title: Assignment 6.1
; Author: Professor Krasso
; Date: 1 July 2020
; Modified By: Douglas Jenkins
; Description: Errors below
;=========================================== */

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 5.4"));
console.log ('\n');

//Three errors below
try {
  // variables
  let x = 5
  let y = 3
  const sum = x - y

  // if statement ===
  if (sum === 2 ) throws 'Equal Value'

  // output
  console.log(sum)
} catch (errs) {
  console.log('Catch clause: ' + err)
} finally [
  console.log('Finally clause reached...')
]
