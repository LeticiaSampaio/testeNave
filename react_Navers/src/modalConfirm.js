var modal = document.getElementById("modalContainer");
var save = document.getElementById("save");
var exit = document.getElementById("close");

save.onclick = function() {
    modal.style.display = "block";
}

exit.onclick = function() {
    modal.style.display = "none";
    window.location.replace("index.html");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.replace("index.html");
    }
}