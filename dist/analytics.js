"use strict";
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics('The data');
const btn = document.getElementById('btn');
function clickHandler(message) {
    console.log('Joash is awesome' + message);
}
if (btn) {
    btn.addEventListener('click', clickHandler.bind(null, "Doink"));
}
