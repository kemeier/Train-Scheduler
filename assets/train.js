$(document).ready(function () {

    //initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAzOoB3qSWj4w_-JdjzKtA9z7ZS8QYZGyE",
        authDomain: "scheduler-a25fb.firebaseapp.com",
        databaseURL: "https://scheduler-a25fb.firebaseio.com",
        projectId: "scheduler-a25fb",
        storageBucket: "",
        messagingSenderId: "1084392192796",
        appId: "1:1084392192796:web:9833a77e5ff49400"
      };

    firebase.initializeApp(firebaseConfig);

    //Represents firebase database
    var train = firebase.database();

    //Button that enters user information when clicked
    $("#button").on("click", function (event) {
        alert("clicked");
        event.preventDefault();

        //Variables for user information entered
        var trainName = $("#train-name").val().trim();
        var destination = $("#destination").val().trim();
        var frequency = $("#frequency").val().trim();

        // First Time (pushed back 1 year to make sure it comes before current time)
        var trainTime = moment($("#train-time").val().trim(), "hh:mm").subtract(1, "years");

        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        //Contains train information   
        var newTrain = {
            name: trainName,
            whereGoing: destination,
            trainComing: trainTime.format("HH:mm"),
            howOften: frequency
        };

        //Pushes new train information to firebase
        train.ref().push(newTrain);

        //Returns form values back to zero
        $("#train-name").val("");
        $("#destination").val("");
        $("#train-time").val("");
        $("#frequency").val("");

        return false;

    });

    //Tells Firebase to return info to add back onto the webpage
    train.ref().on("child_added", function (childSnapshot) {

        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().whereGoing;
        var trainTime = (childSnapshot.val().trainComing);
        var frequency = childSnapshot.val().howOften;
        
        var firstTime = moment(trainTime, "HH:mm");
    
        var difference = moment().diff(moment(firstTime));
        // Difference between the current and first times
        console.log(difference);

        // Time apart (remainder)
        var remainder = difference % frequency;
        console.log(remainder);

        // Minutes until next train comes
        var minTillTrain = frequency - remainder;


        //Time next train comes
        var nextTrain = moment().add(minTillTrain, "minutes").format("hh:mm");

        //Add new information to display on page
        $("#table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + minTillTrain + "</td></tr>");

    });


});



