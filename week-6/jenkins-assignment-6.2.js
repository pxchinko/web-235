/* ============================================
; Title: Assignment 6.1
; Author: Professor Krasso
; Date: 1 July 2020
; Modified By: Douglas Jenkins
; Description: Exception Handling
;=========================================== */

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 6.2"));
console.log ('\n');


try {
  // variables of lion and tiger
  let x = 'Tiger'
  let y = 'Lions'
  const sum = (y,x)

  // if statement === Lions and Tigers
  if (sum === 'Lions','Tigers') throw 'Lions and Tigers'

  // output
  console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
