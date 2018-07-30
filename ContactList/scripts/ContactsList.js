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