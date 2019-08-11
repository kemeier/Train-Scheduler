
    $( document ).ready(function() {
    
    var trainName = "";
    var destination = "";
    var trainTime = 0;
    var frequency = 0;

       
    
    $("#button").on("click", function(event) {
        alert("clicked");

        var firebaseRef = firebase.database().ref();

        firebaseRef.child("Text").set("Some Value");
    
    })
    
});

