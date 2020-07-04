/*
============================================
; Title: Objects js
; Author: Devan Wong
; Date: 2 July 2020
; Modified By: Douglas Jenkins
; Description: Objects and built in objects [ 3 errors ]
;===========================================
*/

var topSecret = {
firstName: 'Devan',
lastName : 'Wong',
birthday: 'November 7, 1990',
get fullProfile() { // : needed to be removed so get can be properly called
return topSecret.firstName + ' ' + topSecret.lastName + ' ' + topSecret.birthday
}}


//topsecret was incorrect, It should be topSecret

Object.defineProperty(topSecret, 'SSN', {
value: '123-234-1234',
writable: true,
configurable: true,
enumerable: false // needed to be changed to false so the proper output will be shown
});

for (let value in topSecret) {
console.log(topSecret[value]);
}

//OUT THE SSN SHOULD NOT BE SHOWN.
//OUTPUT Devan Wong November 7, 1990
