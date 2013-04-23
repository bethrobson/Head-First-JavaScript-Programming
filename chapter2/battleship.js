// Ready Bake Code
function logToBrowser(message) {
    var results = document.getElementById("results");
    results.innerHTML = results.innerHTML + "<br>" + message;
	console.log(message);
	alert(message);
}

function getUserInput() {
	var input = prompt("Ready, aim, fire! (enter a number from 0-6):");
	return input;
}

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) { 
    guess = getUserInput();
    if (guess < 0 || guess > 6) {  
       logToBrowser("Please enter a valid cell number!");
	} else {
      guesses = guesses + 1;

      if (guess == location1 || guess == location2 || guess == location3) {
          logToBrowser("HIT!");
          hits = hits + 1;
          if (hits == 3) {
            isSunk = true;
            logToBrowser("You sank my battleship!");
          }
      } else {
         logToBrowser("MISS");
      }
    }
} 
var stats = "You took " + guesses + " guesses to sink the battleship, " +
               "which means your shooting accuracy was " + (3/guesses);
logToBrowser(stats);
