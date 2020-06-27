/* ============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 26 June 2020
; Modified By: Douglas Jenkins
; Description: Using the foreach function to form sentences
;=========================================== */

//A List of Famous Composers for Video Games
var famousCompo = [
{ firstName: 'Hiroki', lastName: 'Kikuta', genre: 'Video Game', rating: 8 },
{ firstName: 'Harry', lastName: 'Williams', genre: 'Video Game', rating: 7 },
{ firstName: 'Michiru', lastName: 'Yamane', genre: 'Video Game', rating: 9 },
{ firstName: 'Jeremy', lastName: 'Soule', genre: 'Video Game', rating: 6 },
{ firstName: 'Nobuo', lastName: 'Uematsu', genre: 'Video Game', rating: 10 }
];

//Calls the composers in descriptive sentences
famousCompo.forEach(function(compo){
  console.log(" First Name: "+ compo.firstName +", Last Name: "+ compo.lastName +", Genre: "+ compo.genre +", Rating: "+ compo.rating);
});

