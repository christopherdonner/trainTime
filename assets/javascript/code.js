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
  var trainDestinationTd=$("<td>").text(train.Destination)
  var trainFrequencyTd=$("<td>").text(train.Frequency)
  var trainNextTrainTd=$("<td>")/text(train.nextTime)
  row.append(trainNameTd, trainDestinationTd, trainFrequencyTd, trainNextTrainTd)
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
train.Frequency=snapshot.val().trainFrequency;
train.Destination=snapshot.val().trainDestination;
train.nextTime=snapshot.val().trainNextTrain;
})


//$("#trainName").text=train.Name

$("#submitButton").on("click", function(){
  
    train.Name=$("#trainName").val().trim();
    train.Destination=$("#trainDestination").val().trim();
    train.Frequency=$("#trainFrequency").val().trim();
    console.log(train.Name)
    console.log(train.Destination)
    console.log(train.Frequency)
    //set current values in firebase
    database.ref().push({
      trainName: train.Name,
      trainDestination: train.Destination,
      trainFrequency: train.Frequency
    });
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#trainFrequency").val("");
    
    var tableBody=$("#trainSchedule")
    var row=$("<tr>")
    var trainNameTd=$("<td>").text(train.Name);
    var trainDestinationTd=$("<td>").text(train.Destination)
    var trainFrequencyTd=$("<td>").text(train.Frequency)
    row.append(trainNameTd, trainDestinationTd, trainFrequencyTd)
    tableBody.append(row)
  })
 

  database.ref().on("value", function(snapshot) {
    train.Name=snapshot.val().trainName;
    train.Frequency=snapshot.val().trainFrequency;
    train.Destination=snapshot.val().trainDestination;
    train.nextTime=snapshot.val().trainNextTrain;
    })

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      $("#trainName").text(snapshot.val().trainName);
      $("#trainDestination").text(snapshot.val().trainDestination);
      $("#trainFrequency").text(snapshot.val().trainFrequency);
      $("#train2").text(snapshot.val().comment);
    });