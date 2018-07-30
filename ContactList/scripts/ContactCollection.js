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

