function externalJs() {
    alert('Hello from externalJs');
}
function sayHi() {
    alert("Hi " + document.getElementById("name").value);
}
function changeColorRed() {
    document.body.style.backgroundColor = "red";
}
function changeColorBlue() {
    document.body.style.backgroundColor = "blue";
}
function resetColor() {
    document.body.style.backgroundColor = "#ccc";
}


function dynamicEventTest() {
    alert("Dynamic Listener");
}
function addDynamicEventListener(){
document
    .getElementById("Dynamic")
    .addEventListener("click", dynamicEventTest, false);
}

function showHideDiv() {
    var currentStyle = document.getElementById("div").style.display;
    if (currentStyle == "none") {
        document.getElementById("div").style.display = "block";
    } else {
        document.getElementById("div").style.display = "none";
    }
}

function deleteMessage() {
    var result = confirm("Are you sure you want to delete?");
    if (result == true) {
        console.log("deleted");
    }
}

function getUserInput() {
    var result = prompt("What is your name?");
    document.write("Welcome " + result);
}