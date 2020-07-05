/*
============================================
; Title: Discussion 5.1
; Author: Dan Ross
; Date: 2 July 2020;
; Description: Objects with errors
;===========================================
*/
//This program has 3 errors

//Object
var book = {
  title: "Weaveworld", // Got rid of the quotes that were around title, for, ISBN and genre so it can work properly
  for: "mature audiences",
  ISBN: "0743417356",
  genre: "Gothic Fiction",
    author: {
    firstName: "Clive",
    lastName: "Barker"
    } // closing bracket was missing
};

//output
// Need to properly call the nested function so the results would be shown
console.log("One of my favorite books is " + book.title + " by " + book['author']['firstName'] + " " + book['author']['lastName'] + ". " +
"It's for " + book.for + " and is a " + book.genre + " novel. " + "Its ISBN is " + book.ISBN + ".");

//Expected output
//One of my favorite books is Weaveworld by Clive Barker. It's for mature audiences and is a gothic fiction novel. Its ISBN is 0743417356.
