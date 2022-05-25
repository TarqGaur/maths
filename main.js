function login() {
    localStorage.setItem("player_1", document.getElementById("input_1").value);
    localStorage.setItem("player_2", document.getElementById("input_2").value);
    window.location = "new.html";

}