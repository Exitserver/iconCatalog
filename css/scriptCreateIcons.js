
//"use strict"

// Set up the page
const app = document.getElementById("root");

// todo: insert "last update" line

/* todo: refine logo; amend to heading type*/
const logo = document.createElement("img");
logo.src = "images/profile.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

/* Assemble request - create variable, send request, access JSON data*/
var request = new XMLHttpRequest();

request.open('GET', 'css/data.json', true);
request.onload = function() {

// Parse string response into JS objects
var data = JSON.parse(this.response);

// This is about server status codes
if (request.status >= 200 && request.status < 400) {
    
    data.forEach(icon => { //how do i name the incoming array?

/*because here it's an array
for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + ' use ' + data[i].className + '.');
    }
*/

        const thumbnail = document.createElement("div");
        thumbnail.setAttribute("class", "thumbnail");
        
        const h2 = document.createElement("h2");
        h2.textContent = name.className;
        
        const p = document.createElement("p");
        className.description = className.description.substring(0,300);
        p.textContent = `${classname.description}...`;
        
        container.appendChild(thumbnail);
        card.appendChild(h2);
        card.appendChild(p);
        
    console.log(icon.name);
    });
    
    } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Meh`;
    app.appendChild(errorMessage); 
    } 
}

request.send();
