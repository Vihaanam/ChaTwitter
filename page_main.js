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
        msg : msg,
        like : like
    });
    document.getElementById("msg").value = "";
}
function logOut() {
    localStorage.removeItem("username_of_ChaTwitter");
    localStorage.removeItem("room_name_of_ChaTwitter");
    window.location = "index.html";
}