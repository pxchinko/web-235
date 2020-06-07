/*
============================================
; Title:  jenkins-assignment-2.4
; Author: Professor Krasso
; Modified By: Douglas Jenkins
; Date: 3 June 2020
; Description: List of functions
;===========================================
*/

// Names
function fullName(firstName, lastName){
  return firstName + lastName;
}

// Current day
function dateWriter(year, month, day){
return new Date(year + month + day);
}

// Format Number
function formatNumber(number, numOfFixedPositions){
return number + numOfFixedPositions.toFixed(5);
}


// Return Int
function convertToInt(){
return parseInt("15.99");
}

// Return Float
function convertToFloat(){
return parseFloat("26.33");
}



// Output
console.log( 'Hello my name is ' + fullName("Douglas", " Jenkins"));
console.log( 'Todays date is ' + dateWriter(2020, " June ", 03));
console.log(formatNumber(15 , 5));
console.log(convertToInt());
console.log(convertToFloat());
