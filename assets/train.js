$(document).ready(function() {
 
var firebaseConfig = {
    apiKey: "AIzaSyDUGhFAzqegpcdqxI7WSHTms3YFy1vsi2g",
    authDomain: "trainscheduler-1da25.firebaseapp.com",
    databaseURL: "https://trainscheduler-1da25.firebaseio.com",
    projectId: "trainscheduler-1da25",
    storageBucket: "",
    messagingSenderId: "376469405618",
    appId: "1:376469405618:web:da262c5d9b43addf"
  };

  firebase.initializeApp(firebaseConfig);

  $("#button").click(function() {
    console.log("clicked");
})

});

