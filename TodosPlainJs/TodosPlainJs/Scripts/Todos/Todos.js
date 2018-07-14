
var todos = ["wake", "eat", "sleep", "code"];

function hello() {
    alert("hi");
}

window.onload = function () {
    //yourFunction(param1, param2);

    var div = document.getElementById("todosTemp");

    for (var i = 0; i < todos.length; i++) {
        div.innerHTML += todos[i];
        div.innerHTML += "</br>"

    }

    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML =
                this.responseText;
            }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
    }

    //hello();
};