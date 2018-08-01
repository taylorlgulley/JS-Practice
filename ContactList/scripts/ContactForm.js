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