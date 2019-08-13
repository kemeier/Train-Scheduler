        $(document).ready(function()    {

        
        
        $("#button").on("click", function(event) {
        alert("clicked");
        event.preventDefault();

        var trainName = $("#train-name").val().trim();
        var destination = $("#destination").val().trim();
        var trainTime = moment($("#train-Time").val().trim(), "hh:mm").subtract(1, "years").format("X");
        var frequency = $("#frequency").val().trim();

        var currentTime = moment();
	    console.log("CURRENT TIME: " +  moment(currentTime).format("hh:mm"));

    var newTrain = {
        name: trainName,
        whereGoing: destination,
        trainComing: trainTime,
        howOften: frequency
    };

    train.ref().push(newTrain);

    $("#train-name").val("");
    $("#destination").val("");
    $("#train-time").val("");
    $("#frequency").val("");

    return false;

    });

   
});



    