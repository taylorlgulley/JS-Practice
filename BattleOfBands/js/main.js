const bandNumber = 1;
let bandOrder = 0; //Start at zero so first ticket will return as 1. Must define as let instead of const so it will change with the function.

const takeNumber = function (bandName) {
    bandOrder += bandNumber; //Must define variables outside function so they can be referenced and changed
    return   `${bandOrder}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum");
console.log(scum);

const under = takeNumber("Underdogs");
console.log(under);

const king = takeNumber("King Crimson");
console.log(king);

const pillow = takeNumber("The Pillows");
console.log(pillow);