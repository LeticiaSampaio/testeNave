import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

var modal = document.getElementById("modalContainer");
var btnsDelete = document.querySelectorAll(".delete");
var btnsEdit = document.querySelectorAll(".edit");
var cancel = document.getElementById("cancelBtn");
var del = document.getElementById("excludeBtn");
var naver;

btnsDelete.forEach(btn => {
    btn.addEventListener("click", (event) => {
        naver = event.target.parentNode;
        modal.style.display = "block";
    })
});

btnsEdit.forEach(btn => {
    btn.addEventListener("click", (event) => {
        naver = event.target.parentNode;
        window.location.replace("editNaver.html");
    })
});

del.onclick = function() {
    naver.classList.add("hidden");
    modal.style.display = "none";
}

cancel.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}