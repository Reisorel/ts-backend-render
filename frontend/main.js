"use strict";
const responseDiv = document.getElementById("response");
fetch("http://localhost:3000/")
    .then((res) => res.text())
    .then((data) => {
    if (responseDiv)
        responseDiv.textContent = data;
})
    .catch((err) => {
    if (responseDiv)
        responseDiv.textContent = "Erreur : " + err.message;
    console.error(err);
});
