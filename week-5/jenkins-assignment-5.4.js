/* ============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 26 June 2020
; Modified By: Douglas Jenkins
; Description: Using the map function to be used in the foreach function
;=========================================== */

//A List of Famous Composers for Video Games
var famousCompo = [

  { firstName: 'Hiroki', lastName: 'Kikuta', genre: 'Video Game', rating: 8 },
  { firstName: 'Harry', lastName: 'Williams', genre: 'Video Game', rating: 7 },
  { firstName: 'Michiru', lastName: 'Yamane', genre: 'Video Game', rating: 9 },
  { firstName: 'Jeremy', lastName: 'Soule', genre: 'Video Game', rating: 6 },
  { firstName: 'Nobuo', lastName: 'Uematsu', genre: 'Video Game', rating: 10 }

  ];


//Map function for the rating
var rateCompo = famousCompo.map(function(compo){
  return (compo.rating, compo.lastName);
});

// Map function for the genre
var genreCompo = famousCompo.map(function(secCompo){
  return (secCompo.genre, secCompo.lastName);
});


//for each that calls out the rateCompo variables
console.log(" -- COMPOSER BY RATING -- ");
famousCompo.forEach(function(rateCompo){
  console.log(" Rating: " + rateCompo.rating + "\n" + " Composer: " + rateCompo.lastName + "\n");
});

//creates a blank space
console.log("");

//for each that calls out the genreCompo variables
console.log(" -- COMPOSER BY GENRE -- ");
famousCompo.forEach(function(genreCompo){
  console.log(" Genre: " + genreCompo.genre + "\n" + " Composer: " + genreCompo.lastName + "\n");
});
