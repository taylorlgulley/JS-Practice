"use strict";

function createContact(name, phone, address){
    //(you come up with a string here)
    return `<h2>Contact Info</h2>
            <h3>Name: ${name}</h3>
            <h3>Phone: ${phone}</h3>
            <h3>Address: ${address}</h3>`
}

module.exports = createContact;