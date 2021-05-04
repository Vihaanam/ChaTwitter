var user_name = localStorage.getItem("username_of_ChaTwitter");
document.getElementById("welcome").innerHTML = "Welcome " + user_name;
var firebaseConfig = {
    apiKey: "AIzaSyBaQU5yQlGIurft-fhXramFZkiYBXLuq7Y",
    authDomain: "chatwitter.firebaseapp.com",
    databaseURL: "https://chatwitter-default-rtdb.firebaseio.com",
    projectId: "chatwitter",
    storageBucket: "chatwitter.appspot.com",
    messagingSenderId: "96947256165",
    appId: "1:96947256165:web:ca7060e8c257de155cff8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addRoom() {
    var room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name_of_ChaTwitter", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "Adding room name"
    });
}