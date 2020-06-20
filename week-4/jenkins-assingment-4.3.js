/* ============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 19 June 2020
; Modified By: Douglas Jenkins
; Description: Filtering arrays with iterates
;=========================================== */

//list of arrays
var vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

// creates iterate for the getValue function
function getValue(arr, val){
  for (var k = 0; k < arr.length; k++){
    if(arr[k] === val)
        console.log(arr[k]);
  }

}

// Displays the list of Arrays
console.log(" -- Displaying Array Items -- ");
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

//Creates a space and picks the selected value
console.log("");
console.log(" -- Selected Value -- ")
getValue(vehicles, "Motorcycle");

//Creates a space and picks the selected value
console.log("");
console.log(" -- Selected Value -- ")
getValue(vehicles, "Bus");
