/* ============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 10 June 2020
; Modified By: Douglas Jenkins
; Description: Switch statements
;=========================================== */

// Selects the expected output
const eventKeyCode = 13;


// If statement was changed with the Switch, added space between so it would be more readable.
switch(eventKeyCode) {
  case 13 :
  console.log('The enter key was pressed.')
  break;

  case 16 :
  console.log('The shift key was pressed.')
  break;

  case 32 :
  console.log('The space bar key was pressed.')
  break;

  case 8 :
  console.log('The backspace / delete key was pressed.')
  break;

  default :
  console.log('Unrecognized key.')
  break;
}
