alert("working!")

var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;
var userGuess

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDe2lhHx6iXmM19ps-i6esAg_Q-rYLf_gk",
    authDomain: "bootcamp-test-app.firebaseapp.com",
    databaseURL: "https://bootcamp-test-app.firebaseio.com",
    projectId: "bootcamp-test-app",
    storageBucket: "bootcamp-test-app.appspot.com",
    messagingSenderId: "975260567147"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//initial DB values:
var player1Name="player1"
var player2Name="player2"
var player1Guess=""
var player2Guess=""
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.
    database.ref().set({
        userGuess: player1Guess
        //player2Guess: p2Guess
      });
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) 
    {

      if ((userGuess === "r" && computerGuess === "s") ||
        (userGuess === "s" && computerGuess === "p") || 
        (userGuess === "p" && computerGuess === "r")) 
        {
        wins++;
        } 
        else if (userGuess === computerGuess) 
        {
        ties++;
        } 
      else 
        {
        losses++;
        }
    }
}

