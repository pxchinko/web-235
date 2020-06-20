/*
============================================
; Title: Discussion Board 4.1
; Author: Dan Ross
; Date: 18 June 2020;
; Description: Arrays with errors
;===========================================
*/
//Array of some classic horror movies
var movies = ["Evil Dead", "Dawn of the Dead", "Night of the Living Dead", "Day of the Dead", "Army of Darkness"];

//add another movie to the beginning of the array
// Incorrect way to place an array
movies[0] = "Exorcist";

//loop though the array
for (var i = 0; i < movies.length; i++) {
  //sort movies alphabetically
  // .sort() was incorrect because of there was a comma instead of a period.
  movies.sort();
  //output
  console.log(movies[i]);
}
