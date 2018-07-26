/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
const handlerFunction = function (item) {
    item.classList.remove("disabled");
    item.classList.add("enabled");
    console.log("Got it");
} 
var flight = document.getElementById("flight");
document.querySelector("#activate-flight").addEventListener("click", (event) => {
    handlerFunction(flight);
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
var mindreading = document.getElementById("mindreading");
document.querySelector("#activate-mindreading").addEventListener("click", (event) => {
    handlerFunction(mindreading);
})
var xray = document.getElementById("xray");
document.querySelector("#activate-xray").addEventListener("click", (event) => {
    handlerFunction(xray);
})
/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/
const handlerFunction2 = function (item) {
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        if (element.classList.contains("disabled")) {
            element.classList.remove("disabled");
            element.classList.add("enabled");
        } else if (element.classList.contains("enabled")) {
            element.classList.remove("enabled");
            element.classList.add("disabled");
        }
    }
}
var allPowers = document.querySelectorAll(".power");
document.querySelector("#activate-all").addEventListener("click", (event) => {
    handlerFunction2(allPowers);    
    console.log("powers");
})
document.querySelector("#deactivate-all").addEventListener("click", (event) => {
    handlerFunction2(allPowers);
    console.log("no powers");
})
