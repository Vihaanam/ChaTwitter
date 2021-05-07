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
var user_name = localStorage.getItem("username_of_ChaTwitter");
document.getElementById("welcome").innerHTML = "Welcome " + user_name;
function addRoom() {
    var room_name = document.getElementById("room_name").value;
    console.log("Room name - " + room_name);
    localStorage.setItem("room_name_of_ChaTwitter", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "Adding room name"
    });
    window.location = "chatwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room names are - " + Room_names);
 row = "<h2 id="+ Room_names + " onclick='redirect_to_page(this.id)'>#" + Room_names + "</h2><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirect_to_page(name) {
    console.log("Room name - " + name);
    localStorage.setItem("room_name_of_ChaTwitter", name);
    window.location = "chatwitter_page.html";
}
function logOut() {
    localStorage.removeItem("room_name_of_ChaTwitter");
    localStorage.removeItem("username_of_ChaTwitter");
    window.location = "index.html";
}
