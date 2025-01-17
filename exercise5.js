// Count the number of words in a sentence

function countWord(text) {
    let count = 0;

    for(let i = 0; i < text.length; i++) {
        if(text[i] == " ") {
            count++;
        }
    }
    return count + 1;
}

console.log(countWord("This is the best day"));
