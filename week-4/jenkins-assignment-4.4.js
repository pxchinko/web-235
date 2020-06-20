/* ============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 19 June 2020
; Modified By: Douglas Jenkins
; Description: Using the .filter method
;=========================================== */


// Variable for the lists of States
var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];


// creates a function called getState
function getState(arr, val){
  if (arr === val){
   return true;
  }
}

// Creates filtered States and passes Iowa on the the getState Function
  var filteredStates = states.filter(function(getState){
      return getState === 'Iowa';
  });



// Displays the original Variable
console.log(" -- Original Array -- ");
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}


// Creates space and added .sort() so that the states will be put in alphabetic order.
console.log("");
console.log(" -- Sorted Array -- ");
for (var p = 0; p < states.length; p++) {
  states.sort();
  console.log(states[p]);
}


//Creates space and displays Iowa
console.log("");
console.log(" -- Selected Value -- ");
console.log(filteredStates[0]);
