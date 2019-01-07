var train = {
  Name: "",
  Destination: "",
  Frequency: 0,
  nextTime: 0
}

function appendTable(){
var tableBody=$("#trainSchedule")
var row=$("<tr>")
var trainNameTd=$("<td>").text(train.Name);
var trainDestinationTd=$("<td>").text(train.Destination);
var trainFrequencyTd=$("<td>").text(train.Frequency);
var trainNextTd=$("<td>").text(train.nextTime);
row.append(trainNameTd, trainDestinationTd, trainFrequencyTd, trainNextTd)
tableBody.append(row)
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


database.ref().on("value", function(snapshot) {
train.Name=snapshot.val().trainName;
})


//$("#trainName").text=train.Name

$("#submitButton").on("click", function(){
  train.Name=$("#trainName").val().trim();
  train.Destination=$("#trainDestination").val().trim();
  train.Frequency=$("#trainFrequency").val().trim();
  train.nextTime=$("#trainNext").val().trim();
  console.log(train.Name)
  console.log(train.Destination)
  console.log(train.Frequency)
  console.log(train.nextTime)
  //set current values in firebase
  database.ref().push({
    trainName: train.Name,
    trainDestination: train.Destination,
    trainFrequency: train.Frequency,
    trainNext: train.nextTime
  });
  $("#trainName").val("");
  $("#trainDestination").val("");
  $("#trainFrequency").val("");
  $("#trainNext").val("");
  
appendTable();
})