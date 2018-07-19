

function addTodo() {
    var todo = document.getElementById("myTextarea").value;

    //debugger;
    //alert(todo);
    //alert(todo);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/Home/AddTodo', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {//Call a function when the state changes.
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // Request finished. Do processing here.
            loadDoc();
        }
    }
    xhr.send("todo="+todo);
    xhttp.send();
}


function loadDoc() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var values = JSON.parse(this.responseText);


                document.getElementById("values").innerHTML =
                JSON.stringify(values);

                values.sort((a, b) =>a.Id - b.Id);
                //myFunction(myArr);

                /*
                 * 
                document.getElementById("demo").innerHTML =
                this.responseText;
                var values = this.responseText;

                 */
                var mixed = document.getElementById("mixed");
                mixed.innerHTML = '';













                var tr = document.createElement("tr");
                var td = document.createElement("td");
                td.appendChild(document.createTextNode('Order'));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode('To do'));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode('Id--make this into a hidden field and use this to delete the todo'));
                tr.appendChild(td);

                tr.style.fontWeight = 'bold';

                mixed.appendChild(tr);







                // IE7 only supports appending rows to tbody
                var tbody = document.createElement("tbody");

                // for each outer array row
                for (var i = 0 ; i < values.length; i++) {
                    //debugger;
                    var tr = document.createElement("tr");

                    // for each inner array cell
                    // create td then text, append
                    var txt = document.createTextNode(values[i]["Todo"]);

                    var td2 = document.createElement("td");
                    var index = document.createTextNode(i + 1);
                    td2.appendChild(index);
                    tr.appendChild(td2);

                    var td3 = document.createElement("td");
                    //tr.appendChild(td2);
                    var txt = document.createTextNode(values[i]["Todo"]);
                    td3.appendChild(txt);
                    tr.appendChild(td3);

                    var td4 = document.createElement("td");
                    //tr.appendChild(td2);
                    var txt = document.createTextNode(values[i]["Id"]);
                    td4.appendChild(txt);
                    tr.appendChild(td4);



                    //tr.appendChild(document.createTextNode(""));
                    //tr.appendChild(txt);
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

    loadDoc();

};