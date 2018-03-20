//Example for Spread operator
var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

//Combine above arrays into single array in order as primes, evens and odds
var sequence= [...primes,...evens,...odds];
console.log("Sequence 1 is " + sequence);

//Copy primes array into another array
var primes2= [...primes];
console.log("Copied " + primes2);

//Destructuring below object
var jamesBond = {
first: 'James',
last: 'Bond',
country: 'United States',
city: 'New york',
twitter: '@jamesbond'
};

var{first,last,country,city,twitter:twitter}= jamesBond;
console.log("My name is " + jamesBond.first + jamesBond.last);

//Destructure below array into variables player1,player2,player3 and player4 respectively
var players = ['paul', 'andy', 'darrell', 'jim'];
var[player1,player2,player3,player4]=players;
console.log("Player1 name is " + player1 + "player2 name is " + player2 + " player3 name is " + player3 + " player4 name is " + player4) ;