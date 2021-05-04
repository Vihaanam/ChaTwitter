function go_next() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username_of_ChaTwitter", username);
    window.location = "chatwitter_index.html";
}