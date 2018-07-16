console.log("hi")

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

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
            buildMeUp += " " + sentence[i-1];
            for (let j = 1; j <= i; j++) {        // add another counter and for loop to add on ! for each time j is 
                if ( j % 3 === 0 ) {
                    buildMeUp += x               // change ! to x so when you call the function you can change what punctuation you want
                }
            }
        } else {
            buildMeUp += " " + sentence[i-1];
        }
       // Concatenate the new word onto buildMeUp
       // Print buildMeUp to the console
        console.log(buildMeUp);
    } 
}
    
// Invoke the function and pass in the array
addExcitement(sentence, "?");











