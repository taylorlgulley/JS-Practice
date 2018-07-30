(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function createContact(name, phone, address){
    //(you come up with a string here)
    return `<h2>Contact Info</h2>
            <h3>Name: ${name}</h3>
            <h3>Phone: ${phone}</h3>
            <h3>Address: ${address}</h3>`
}

module.exports = createContact;
},{}],2:[function(require,module,exports){
"use strict";

let contacts = [
    {
        name: "Taylor Gulley",
        phone: "1111111111",
        address: "Yeah no"
    },
    {
        name: "Cheryl Gulley",
        phone: "2222222222",
        address: "yeah no"
    },
    {
        name: "Dennis Gulley",
        phone: "3333333333",
        address: "yeah no"
    }
];

localStorage.setItem("contacts", JSON.stringify(contacts));

console.log(JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;


},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
"use strict";
let createContact = require("./Contact");
let contactCollection = require("./ContactCollection");

//1. get contacts from LS
//2. iterate over them
//3. render them to the DOM

function listContacts(){
    contactCollection().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactsToDom(contactComponent);
    });
}

function writeContactsToDom(contact){
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;
},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";

let data = require("./ContactCollection");

let contactForm = require("./ContactForm");
let listContacts = require("./ContactsList")

listContacts();

console.log(data()); 
},{"./ContactCollection":2,"./ContactForm":3,"./ContactsList":4}]},{},[5]);
