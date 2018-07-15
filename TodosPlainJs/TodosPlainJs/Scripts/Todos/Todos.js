
var todos = ["wake", "eat", "sleep", "code"];

function hello() {
    alert("hi");
}


function loadDoc() {
    //$.get("/Home/GetTodos", function (data, status) {
    //    alert("Data: " + data + "\nStatus: " + status);
    //});
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var values = JSON.parse(this.responseText);
                //myFunction(myArr);

                /*
                 * 
                document.getElementById("demo").innerHTML =
                this.responseText;
                var values = this.responseText;

                 */
                var mixed = document.getElementById("mixed");

                // IE7 only supports appending rows to tbody
                var tbody = document.createElement("tbody");

                // for each outer array row
                for (var i = 0 ; i < values.length; i++) {
                    //debugger;
                    var tr = document.createElement("tr");

                    // for each inner array cell
                    // create td then text, append
                    var txt = document.createTextNode(values[i]["Todo"]);
                    /*
                    for (var j = 0; j < values[i].length; j++) {
                        var td = document.createElement("td");
                        var txt = document.createTextNode(values[i][j]);
                        td.appendChild(txt);
                        tr.appendChild(td);
                    }
*/
                    tr.appendChild(document.createTextNode(""));
                    tr.appendChild(txt);
                    //td.appendChild(txt);
                    //tr.appendChild(td);
                    // append row to table
                    // IE7 requires append row to tbody, append tbody to table
                    tbody.appendChild(tr);
                    mixed.appendChild(tbody);
                }
            }
        };
        xhttp.open("GET", "/Home/GetTodos", true);
        xhttp.send();
    }

window.onload = function () {
    //yourFunction(param1, param2);

    var div = document.getElementById("todosTemp");

    for (var i = 0; i < todos.length; i++) {
        div.innerHTML += todos[i];
        div.innerHTML += "</br>"

    }

    //hello();
};