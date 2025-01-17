// Write a function to count how many times a character appears in a string.

function countCharInString(text, char) {
    let count = 0;

    for(let i = 0; i < text.length; i++) {
        if(char == text[i]) {
            count++;
        }
    }

    return count;
} 

console.log(countCharInString("hello world", 'd'));