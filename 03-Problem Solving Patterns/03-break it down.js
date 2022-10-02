// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa");  // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
charCount("Your PIN number is 1234!") // { ... }

function charCount(str) {
    // return an object with keys that are lowercase alphanumeric characters in the string;
    // values should be the counts for those characters.
}

function charCount(str) {
    // make object to return at end
    // loop over string, for each character...
        // if the char is a number/letter AND a key in object, add one to count
        // if the char is number/letter AND not in object, add it to object and set value to 1
        // if character is something else(space, period, etc.) don't do anything
    // return object at end
}