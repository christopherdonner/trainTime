var train = {
    var: Name,
    var: Destination,
    var: Frequency
}



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

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


    
    // Reworked our code from last step to use "else if" instead of lots of if statements.
    database.ref().set({
        trainName: train.Name,

        //player2Guess: p2Guess
      });
 
    }
}

