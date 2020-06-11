/* ============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 10 June 2020
; Modified By: Douglas Jenkins
; Description: Looping random matching patterns
;=========================================== */

// Variable that needs to be matched
var num = 7;

// For statement that sets 10 iterations and local var that calls the random number generator
// if and else need to be called here in order for the 10 iterations to show
for (var x = 0; x<10;x++){
  var j = Math.floor((Math.random() * 10) + 1);
  if(match(num, j)) {
    logmatch(num, j);
  } else {
    logMismatch(num, j);
  }
}

// begins the pattern matching function to return logmatch if true and logMismatch if false
function match(arg1, arg2){
  if (arg1 === arg2){
    return true
  }else{
    return false
  }
}

// creates the function for the return false and displays the response if they do not match
function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " does not match!");
}

// creates the function for the return true and displays the response if they do match
function logmatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " does match!");
}


/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
