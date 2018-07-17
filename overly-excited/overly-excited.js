console.log("hi")

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let nextSentence = ["The","coder","learns","the","code","grows","they","become","master"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */


function addExcitement (theWordArray, x) {             // added another argument to the function

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 1; i <= theWordArray.length; i++) {
        if ( i % 3 === 0 && i !== 0) {
            buildMeUp += " " + theWordArray[i-1];
            for (let j = 1; j <= i; j++) {        // add another counter and for loop to add on ! for each time j is 
                if ( j % 3 === 0 ) {
                    buildMeUp += x               // change ! to x so when you call the function you can change what punctuation you want
                }
            }
        } else {
            buildMeUp += " " + theWordArray[i-1];
        }
       // Concatenate the new word onto buildMeUp
       // Print buildMeUp to the console
        console.log(buildMeUp);
    } 
}
    
// Invoke the function and pass in the array
addExcitement(sentence, "?");

// addExcitement(nextSentence, "!");          // another array to use but you must change the sentence vaiable in the for loop to nextSentence



//another method to solve the above problem
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray, symb) {

//     let buildMeUp = "";
//     let wordCount = 0;

//     for (let i = 0; i < theWordArray.length; i++) {
//         wordCount ++;
//         let currentWord = theWordArray[i];
//         buildMeUp += " " + currentWord;

//         if(wordCount % 3 === 0){
//             buildMeUp = buildMeUp + symb.repeat(wordCount/3);
//         }
//         console.log(buildMeUp);
//     }

// }

// addExcitement(sentence, " SO GREAT ");





let addMoreExcitement = (theWordArray, x) => {             // the arrow function version of my code above

    let buildMeUp = ""

    for (let i = 1; i <= theWordArray.length; i++) {
        if ( i % 3 === 0 && i !== 0) {
            buildMeUp += " " + theWordArray[i-1];
            for (let j = 1; j <= i; j++) {
                if ( j % 3 === 0 ) {
                    buildMeUp += x
                }
            }
        } else {
            buildMeUp += " " + theWordArray[i-1];
        }
        console.log(buildMeUp);
    } 
}

addMoreExcitement(nextSentence, "&");

// Jenna's way to solve the problem
// Create an array that contains the words in the sentence
// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement(theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""
//     let addToWord = 0
//     for (let i = 0; i < theWordArray.length; i++) {
//         let currentWord = theWordArray[i]
//         // concatenate or add a word to the row
//         buildMeUp += currentWord
//         // when the index is divided by 3 and the remainder needs to = 2
//         if (i % 3 === 2) {
//             // after every third word add an ! and add to addToWord
//             buildMeUp += "!"
//             addToWord++
//             // this decrements the index so that index always = addToWord
//             for (let j = addToWord; j > 1; j--) {
//                 buildMeUp += "!"
//             }
//         }
//         buildMeUp += " "
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }
// }
// // Invoke the function and pass in the array
// addExcitement(sentence)