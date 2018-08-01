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

let database = Object.create(null, {
    init: {
        value: function(){
            this.getDatabase();
        }
    },
    contacts: {
        value: [],
        writable:true
    },
    addContact: {
        value: function(newContact){
            let database = this.getContacts();
            database.push(newContact);
            this.setContacts(database);
        }
    },
    getContacts: {
        value: function(){
            return this.contacts;
        }
    },
    getDatabase: {
        value: function(){
            return JSON.parse(localStorage.getItem("contacts")) || [];
        }
    },
    setContacts: {
        value: function(contacts){
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.contacts = this.getDatabase();
        }
    }
});


module.exports = database;


},{}],3:[function(require,module,exports){
let database = require("./ContactCollection");
let contactList = require("./ContactsList");

let form = document.getElementById("form");
let contactForm;


function addContact(event){
    event.preventDefault();
    let customer = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };
    contactForm.reset();
    database.addContact(customer);
    contactList();
}


function populateForm(){

    form.innerHTML = `
    <form id="contact-form">
        <label>Name
            <input id="name" type="text"/>
        </label>
        <label>Phone
            <input id="phone" type="text"/>
        </label>
        <label>Address
            <input id="address" type="text"/>
        </label>
        <button id="add-contact">Add Contact</button>
    </form>
    `;
    contactForm = document.getElementById("contact-form");
    document.getElementById("add-contact").addEventListener("click", addContact);
}

module.exports = populateForm;
},{"./ContactCollection":2,"./ContactsList":4}],4:[function(require,module,exports){
"use strict";
let createContact = require("./Contact");
let database = require("./ContactCollection");

//1. get contacts from LS
//2. iterate over them
//3. render them to the DOM

let outputEl = document.querySelector("#contactList");

function listContacts(){
    outputEl.innerHTML = "";
    database.getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactsToDOM(contactComponent);
    });
}

function writeContactsToDOM(contact){
    outputEl.innerHTML += contact;
}

module.exports = listContacts;
},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";

let populateForm = require("./ContactForm");
let listContacts = require("./ContactsList");

listContacts();
populateForm();
},{"./ContactForm":3,"./ContactsList":4}]},{},[5]);
