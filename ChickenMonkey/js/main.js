const number = [];

for (let x = 1; x <= 100; x++) {
    number.push(x);
}

for (let i = 0; i < number.length; i++) {
    const currentNumber = number[i];
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenmonkey");
    } else if (currentNumber % 7 === 0) {
        console.log("monkey");
    } else if (currentNumber % 5 === 0) {
        console.log("chicken");
    } else {
        console.log(currentNumber);
    }
}