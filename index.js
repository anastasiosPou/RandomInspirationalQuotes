//The functionality goes here.

//Import quotes array from data.js
const quotesObject = require('./data.js');
//The above is an object so I have to .quotes to copy the actual array
const quotes = quotesObject.quotes;


//Gives a random number from 0 to the last index of the array.
const randomIndex = () => Math.floor(Math.random() * quotes.length);
