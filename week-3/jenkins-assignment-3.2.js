/* ============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 10 June 2020
; Modified By: Douglas Jenkins
; Description: Matching functions
;=========================================== */

// Variable declaration
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

// Function Match Arg 1/2  if they are equal === returns the statement true or false
function match(arg1, arg2){
  if (arg1 === arg2){
    return true
  }else{
    return false
  }
}

// Function Mismatch if they do not match message will state it
function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

// Function Mismatch if they do match message will state it
function logmatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}


// Test 1 for Car and Truck
if(match(testVar1, testVar2)) {
  logmatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

// Test 2 for Bike and Bike
if(match(testVar3, testVar4)) {
  logmatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

// Test 3 for Four and Three
if(match(testVar5, testVar6)) {
  logmatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}
