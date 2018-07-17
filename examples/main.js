const sweetFactory = function(topping){
    const sweet = Object.create({}, {
        topping: {
            value: topping
        },
        move: {
            value: function(arg){
                console.log(`The sweet will ${arg}`);
            }
        }
    });
    return sweet;
};

let arrayOsweets = [];

arrayOsweets.push(makeSweet("chocolate"));
arrayOsweets.push(makeSweet("vanilla"));

console.log(arrayOsweets);


// objects and creating them practice
let table = {
    legs: 4,
    maker: "Target",
    color: "brown",
    height: "12'",
    material: "wood",
    move: function(movement){
        console.log(`This ${this.color} table will ${movement}!`);
    }
};

table.move("dance");

table.color = "black";
table.move("dance");



const sweetFactory = function(topping){
    const sweet = Object.create({}, {
        topping: {
            value: topping
        },
        move: {
            value: function(arg){
                console.log(`The sweet will ${arg}`);
            }
        }
    });
    return sweet;
};

let arrayOsweets = [];

arrayOsweets.push(sweetFactory("chocolate"), sweetFactory("vanilla"));

console.log(arrayOsweets);