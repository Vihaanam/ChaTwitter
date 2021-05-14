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
user_name = localStorage.getItem("username_of_ChaTwitter");
room_name = localStorage.getItem("room_name_of_ChaTwitter");
function send() {
    msg = document.getElementById("msg").value;
    like = 0;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : like
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         username = message_data["name"];
         message = message_data["message"];
         like = message_data["like"];
         name_tag = "<h4>" + username + "<img class='user_tick' src='tick.png'></h4>";
         message_tag = "<h4 class='message_h4'>" + message + "</h4>";
         button_like = "<button class='btn btn-primary' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
         span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
         row = name_tag + message_tag + button_like + span_tag;
         document.getElementById("output").innerHTML += row;
}});});}
getData();
function updateLike(message_id) {
    button_id = message_id;
    number_of_likes = document.getElementById(button_id).value;
    updated_likes = Number(number_of_likes) + 1;
    firebase.database().ref(room_name).child(button_id).update({
        like : updated_likes
    });
}
function logOut() {
    localStorage.removeItem("username_of_ChaTwitter");
    localStorage.removeItem("room_name_of_ChaTwitter");
    window.location = "index.html";
}