// Reverse an array 

function reverseArray(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

let array = [14, 15, 16, 20];
reverseArray(array);