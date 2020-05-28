/* ============================================ 
; Title: Hello World
; Author: Professor Krasso
; Date: 27 May 2020
; Modified By: Douglas Jenkins
; Description: Variables and Values. 
;=========================================== */

// "hireDate" is Date object Declaration
var hireDate = new Date(2020, 3, 24); 
var hireDate1 = new Date(2020, 4, 07); 
var hireDate2 = new Date(2020, 5, 13); 

//List of Variable Assignments
var firstName = "Don";
var firstName1 = "Ben";
var firstName2 = "Mary";

// Variable LastNames
var lastName = "Johnson";
var lastName1 = "Walker";
var lastName2= "Davidson";

// Variable Locations
var street = "4078 Midway Ave, Bakersfield CA";
var street1 = "1256 Victory Ave, Bakersfield CA";
var street2 = "4050 Bella Ln, Bakersfield CA";

//Pay rate
var num = 27.5076;
var n = num.toFixed(0);

var num = 30.7076;
var p = num.toFixed(0);

var num = 32.15;
var m = num.toFixed(0);

//Output of the Variable for Employee 1
console.log(firstName + " " + lastName);
console.log(hireDate);
console.log(street);
console.log(n + " per hour");

//Output of the Variable for Employee 2
console.log(firstName1 + " " +  lastName1);
console.log(hireDate1);
console.log(street1);
console.log(p + " per hour");

//Output of the Variable for Employee 3
console.log(firstName2 + " " + lastName2);
console.log(hireDate2);
console.log(street2);
console.log(m + " per hour");