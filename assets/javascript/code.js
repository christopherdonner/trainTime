var currentTime=moment().local().format("HH:mm")

var train = {
  Name: "",
  Destination: "",
  Frequency: 0,
  nextTime: 0,
  timeUntil: 0
}

//clock
setInterval(function(){$("#trainClock").text(moment())}, 1000)

//draws to the table
function appendTable(){
var tableBody=$("#trainSchedule")
var row=$("<tr>")
var trainNameTd=$("<td>").text(train.Name);
var trainDestinationTd=$("<td>").text(train.Destination);
var trainNextTd=$("<td>").text(moment(train.nextTime, "HH:mm"));
train.timeUntil=(moment().diff(moment(train.nextTime), "minutes"))
var trainMinutesUntilTd=$("<td>").text(train.timeUntil-525520)  //this is me trying to fudge the results. 
row.append(trainNameTd, trainDestinationTd, trainNextTd, trainMinutesUntilTd)
tableBody.append(row)
train.nextTime=moment(train.nextTime).format("HH:mm")

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

//on db row add
database.ref().on("child_added", function(childSnapshot) {
  train.Name=childSnapshot.val().trainName;
  train.Destination=childSnapshot.val().trainDestination;
  train.Frequency=childSnapshot.val().trainFrequency;
  train.nextTime=childSnapshot.val().trainNextTime;
  train.nextTime=moment(train.nextTime, "HH:mm").subtract(1, "years") // i don't get this -1 years bit
  appendTable();
})

if($("#trainName").val()!=null && $("#trainDestination").val()!=null){
$("#submitButton").on("click", function(){
  event.preventDefault();
  train.Name=$("#trainName").val().trim();
  train.Destination=$("#trainDestination").val().trim();
  // train.Frequency=$("#trainFrequency").val().trim();
  train.nextTime=$("#trainNext").val();
  //set current values in firebase
  database.ref().push({
    trainName: train.Name,
    trainDestination: train.Destination,
    trainFrequency: train.Frequency,
    trainNextTime: train.nextTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  $("#trainName").val("");      //clear form
  $("#trainDestination").val("");
  $("#trainFrequency").val("");
  $("#trainNext").val("");
})
}
