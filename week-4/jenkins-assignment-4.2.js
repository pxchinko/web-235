/* ============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 19 June 2020
; Modified By: Douglas Jenkins
; Description: Displaying Arrays
;=========================================== */

// List of Arrays
 var fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];


// Creates a iterate for the getFruit function
function getFruit(arrayFruits){
 for (var k = 0; k < arrayFruits.length; k++){
    console.log(arrayFruits[k]);
 }
}

//Displays the function
getFruit(fruits);
